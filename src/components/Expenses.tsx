import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// component imports
import ExpenseItem from "./ExpenseItem";

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

// style imports
import SectionTitle from "../styles/SectionsTitle";
