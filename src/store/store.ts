import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./ExpenseSlice";

export const store = configureStore({
  reducer: {
    expense: ExpenseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
