import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type expenseObject = { name: string; cost: number; id: number };

export interface expenseSlice {
  expenses: Array<expenseObject>;
  budget: number;
}

const initialState: expenseSlice = {
  expenses: [],
  budget: 2000,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<expenseObject>) => {
      state.expenses.push(action.payload);
    },
    updateExpenses: (state, action: PayloadAction<expenseObject[]>) => {
      state.expenses = action.payload;
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.budget = action.payload;
    },
  },
});

export const { addExpense, setBudget, updateExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;
