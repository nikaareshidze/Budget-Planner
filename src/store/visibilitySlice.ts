import { createSlice } from "@reduxjs/toolkit";

export interface visibilitySlice {
  editBudgetVisibility: boolean;
}

const initialState: visibilitySlice = {
  editBudgetVisibility: false,
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    changeEditBudgetVisibility: (state) => {
      state.editBudgetVisibility = !state.editBudgetVisibility;
    },
  },
});

export const { changeEditBudgetVisibility } = visibilitySlice.actions;

export default visibilitySlice.reducer;
