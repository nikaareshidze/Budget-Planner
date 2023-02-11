import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import ExpenseItem from "./ExpenseItem";
import SectionTitle from "../../styles/SectionsTitle";

export default function Expenses() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const expense = expenses.map(function (item) {
    return <ExpenseItem item={item} />;
  });

  return (
    <div>
      <SectionTitle>Expenses</SectionTitle>
      <div>{expense}</div>
    </div>
  );
}
