import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

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

  const [deleteButtonColor, setDeleteButtonColor] = useState("black");
  function changeDeleteButtonColor() {
    deleteButtonColor == "black"
      ? setDeleteButtonColor("red")
      : setDeleteButtonColor("black");
  }

  return (
    <ExpenseDiv>
      <Title>{item.name}</Title>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <ExpenseCostDiv>
          <Title>{`$${item.cost}`}</Title>
        </ExpenseCostDiv>

        <span
          className="material-symbols-outlined"
          onClick={() => {
            foo();
          }}
          onMouseEnter={() => {
            changeDeleteButtonColor();
          }}
          onMouseLeave={() => {
            changeDeleteButtonColor();
          }}
          style={{ color: deleteButtonColor }}
        >
          delete
        </span>
      </div>
    </ExpenseDiv>
  );
}

// style imports
import ExpenseDiv from "../styles/expense/ExpenseDiv";
import Title from "../styles/fonts/Title";
import ExpenseCostDiv from "../styles/expense/ExpenseCostDiv";
