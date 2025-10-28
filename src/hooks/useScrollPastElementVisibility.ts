import type { divRefType } from '@/components/layout/Header/Header';
import { useState, useEffect } from 'react';

export const useScrollPastElementVisibility = (
  ref: React.RefObject<divRefType>
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  const [divBottom, setDivBottom] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    // Function to update div bottom
    const updateDivBottom = () => {
      if (ref.current) {
        setDivBottom(ref.current.offsetTop + ref.current.offsetHeight);
      }
    };

    // Initial measurement
    updateDivBottom();

    // Observe size changes
    const resizeObserver = new ResizeObserver(updateDivBottom);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // Scroll handler
    const handleScroll = () => {
      setIsVisible(window.scrollY > divBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [ref, divBottom]);

  return isVisible;
};
