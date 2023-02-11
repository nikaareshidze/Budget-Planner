import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

import { updateExpenses } from "../store/expenseSlice";

export default function ExpenseItem({ item }: any) {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const dispatch = useDispatch();

  const foo = () => {
    const x = expenses.filter((i) => {
      return i.id != item.id;
    });
    dispatch(updateExpenses(x));
  };

  return (
    <ExpenseDiv>
      <Title>{item.name}</Title>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <ExpenseCostDiv>
          <Title>{`$${item.cost}`}</Title>
        </ExpenseCostDiv>
        <ThisTitle
          onClick={() => {
            foo();
          }}
        >
          X
        </ThisTitle>
      </div>
    </ExpenseDiv>
  );
}

// style imports
import ExpenseDiv from "../styles/expense/ExpenseDiv";
import Title from "../styles/fonts/Title";
import ExpenseCostDiv from "../styles/expense/ExpenseCostDiv";

const ThisTitle = styled(Title)`
  cursor: pointer;
`;
