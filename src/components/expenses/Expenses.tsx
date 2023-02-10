import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import ExpenseItem from "./ExpenseItem";

export default function Expenses() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const expense = expenses.map(function (item) {
    return <ExpenseItem item={item} />;
  });

  return (
    <div>
      <h1>Expenses</h1>
      {expense}
    </div>
  );
}
