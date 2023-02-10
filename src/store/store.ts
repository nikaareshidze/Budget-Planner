import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./expenseSlice";

export const store = configureStore({
  reducer: {
    expense: ExpenseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
