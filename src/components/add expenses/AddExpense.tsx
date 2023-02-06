import ExpenseInput from "./ExpenseInput";
import StyledCards from "../../styles/StyledCards";

export default function AddExpense() {
  return (
    <div>
      <h1>Add Expense</h1>
      <StyledCards>
        <ExpenseInput name="Name" />
        <ExpenseInput name="Cost" />
      </StyledCards>
    </div>
  );
}
