import { createSlice } from "@reduxjs/toolkit";

export interface visibilitySlice {
  editBudgetVisibility: boolean;
  allExpenseVisibility: boolean;
}

const initialState: visibilitySlice = {
  editBudgetVisibility: false,
  allExpenseVisibility: true,
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    changeEditBudgetVisibility: (state) => {
      state.editBudgetVisibility = !state.editBudgetVisibility;
    },
    changeAllExpenseVisibility: (state) => {
      state.allExpenseVisibility = !state.allExpenseVisibility;
    },
  },
});

export const { changeEditBudgetVisibility, changeAllExpenseVisibility } =
  visibilitySlice.actions;

export default visibilitySlice.reducer;
