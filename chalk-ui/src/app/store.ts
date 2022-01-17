import { configureStore } from '@reduxjs/toolkit';
import examReducer from '../Exam/features/exam-slice';

export const store = configureStore({
  reducer: {
    exam: examReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;