import uiSlice from '@/store/ui-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
