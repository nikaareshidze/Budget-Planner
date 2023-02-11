import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type expenseObject = { name: string; cost: number; id: number };

export interface expenseSlice {
  expenses: Array<expenseObject>;
  budget: number;
  searchWord: string;
}

const initialState: expenseSlice = {
  expenses: [],
  budget: 2000,
  searchWord: "",
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
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
  },
});

export const { addExpense, setBudget, updateExpenses, setSearchWord } =
  expenseSlice.actions;

export default expenseSlice.reducer;
