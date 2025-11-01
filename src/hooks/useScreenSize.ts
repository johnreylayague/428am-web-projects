import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { uiActions } from '@/store/ui-slice';
import {
  getBreakpointFromWidth,
  type Breakpoint,
} from '@/store/ui-slice.helpers';

export const useScreenSize = () => {
  const dispatch = useDispatch();
  const screenSize = useSelector((state: RootState) => state.ui.screenSize);
  const screenWidth = useSelector((state: RootState) => state.ui.screenWidth);
  const lastBreakpointRef = useRef<Breakpoint | undefined>(screenSize);
  const lastWidthRef = useRef<number | undefined>(screenWidth);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const newBreakpoint = getBreakpointFromWidth(width);

      // Dispatch if either breakpoint or width changed
      if (
        newBreakpoint !== lastBreakpointRef.current ||
        width !== lastWidthRef.current
      ) {
        lastBreakpointRef.current = newBreakpoint;
        lastWidthRef.current = width;
        dispatch(uiActions.setScreenSize({ breakpoint: newBreakpoint, width }));
      }
    };

    // Initial check
    updateScreenSize();

    // Set up resize listener with debounce
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScreenSize, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  return { screenSize, screenWidth };
};
