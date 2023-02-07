import ExpenseInput from "./ExpenseInput";
import StyledCards from "../../styles/StyledCards";
import Button from "../../styles/buttons/Button";

export default function AddExpense() {
  return (
    <div>
      <h1>Add Expense</h1>
      <StyledCards>
        <ExpenseInput name="Name" type="text" />
        <ExpenseInput name="Cost" type="number" />
      </StyledCards>
      <Button>Save</Button>
    </div>
  );
}
