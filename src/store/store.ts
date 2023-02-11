import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";
import visibilitySlice from "./visibilitySlice";

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    visibility: visibilitySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
