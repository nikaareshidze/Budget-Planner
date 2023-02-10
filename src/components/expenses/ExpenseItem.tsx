import ExpenseDiv from "../../styles/expense/ExpenseDiv";
import Title from "../../styles/fonts/Title";
import ExpenseCostDiv from "../../styles/expense/ExpenseCostDiv";

export default function ExpenseItem({ item }: any) {
  return (
    <ExpenseDiv>
      <Title>{item.name}</Title>
      <ExpenseCostDiv>
        <Title>{`$${item.cost}`}</Title>
      </ExpenseCostDiv>
    </ExpenseDiv>
  );
}
