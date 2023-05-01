import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

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
      <ExpenseTitle>{item.name}</ExpenseTitle>
      <ExpenseCostAndDeleteContainer>
        <ExpenseCostTitle>{`$${item.cost}`}</ExpenseCostTitle>
        <AiOutlineDelete
          onClick={() => {
            foo();
          }}
          onMouseEnter={() => {
            changeDeleteButtonColor();
          }}
          onMouseLeave={() => {
            changeDeleteButtonColor();
          }}
          style={{ color: deleteButtonColor, cursor: "pointer" }}
          size={16}
        />
      </ExpenseCostAndDeleteContainer>
    </ExpenseDiv>
  );
}

//style imports
import ExpenseDiv from "../styles/expenses/ExpenseDiv";
import ExpenseCostTitle from "../styles/expenses/ExpenseCostTitle";
import ExpenseCostAndDeleteContainer from "../styles/expenses/ExpenseCostAndDeleteContainer";
import ExpenseTitle from "../styles/expenses/ExpenseTitle";
