import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type expenseObject = { name: string; cost: number; id: number };

export interface expenseSlice {
  expenses: Array<expenseObject>;
  budget: number;
  searchWord: string;
}

const initialState: expenseSlice = {
  expenses: [
    { id: 1, cost: 10, name: "Apple" },
    { id: 2, cost: 20, name: "Banana" },
    { id: 3, cost: 15, name: "Carrot" },
    { id: 4, cost: 5, name: "Donut" },
    { id: 5, cost: 8, name: "Eggplant" },
    { id: 6, cost: 12, name: "Figs" },
    { id: 7, cost: 7, name: "Grapefruit" },
    { id: 8, cost: 25, name: "Honeydew" },
    { id: 9, cost: 30, name: "Ice Cream" },
    { id: 10, cost: 18, name: "Jelly" },
    { id: 11, cost: 22, name: "Kiwi" },
    { id: 12, cost: 3, name: "Lemon" },
    { id: 13, cost: 6, name: "Mango" },
    { id: 14, cost: 13, name: "Nectarine" },
    { id: 15, cost: 17, name: "Orange" },
    { id: 16, cost: 21, name: "Pineapple" },
    { id: 17, cost: 16, name: "Quince" },
    { id: 18, cost: 11, name: "Raspberry" },
    { id: 19, cost: 14, name: "Strawberry" },
    { id: 20, cost: 28, name: "Tomato" },
    { id: 21, cost: 9, name: "Ugli Fruit" },
    { id: 22, cost: 23, name: "Vanilla Bean" },
    { id: 23, cost: 19, name: "Watermelon" },
    { id: 24, cost: 4, name: "Chinese watermelon" },
    { id: 25, cost: 26, name: "Yellow Squash" },
    { id: 26, cost: 2, name: "Zucchini" },
    { id: 27, cost: 24, name: "Asparagus" },
    { id: 28, cost: 27, name: "Broccoli" },
    { id: 29, cost: 1, name: "Cabbage" },
    { id: 30, cost: 29, name: "Dill" },
  ],
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
    addBudget: (state, action: PayloadAction<number>) => {
      state.budget = state.budget + action.payload;
    },
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
  },
});

export const {
  addExpense,
  setBudget,
  updateExpenses,
  setSearchWord,
  addBudget,
} = expenseSlice.actions;

export default expenseSlice.reducer;
