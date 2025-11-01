import { createSlice } from '@reduxjs/toolkit';
import {
  type Breakpoint,
  getInitialScreenSize,
  getInitialScreenWidth,
} from '@/store/ui-slice.helpers';

interface UiState {
  mobileSidebarOpen: boolean;
  screenSize: Breakpoint | undefined;
  screenWidth: number | undefined;
}

const initialState: UiState = {
  mobileSidebarOpen: false,
  screenSize: getInitialScreenSize(),
  screenWidth: getInitialScreenWidth(),
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileSidebar(state) {
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
    openMobileSidebar(state) {
      state.mobileSidebarOpen = true;
    },
    closeMobileSidebar(state) {
      state.mobileSidebarOpen = false;
    },
    setScreenSize(
      state,
      action: { payload: { breakpoint: Breakpoint; width: number } }
    ) {
      state.screenSize = action.payload.breakpoint;
      state.screenWidth = action.payload.width;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
