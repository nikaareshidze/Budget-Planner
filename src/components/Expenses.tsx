import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// component imports
import ExpenseItem from "./ExpenseItem";
import SearchExpense from "./SearchExpense";

export default function Expenses() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);
  const allExpenseVisibility = useSelector(
    (state: RootState) => state.visibility.allExpenseVisibility
  );

  const expense = expenses.map(function (item) {
    return <ExpenseItem item={item} />;
  });

  return (
    <div>
      <SectionTitle>Expenses</SectionTitle>
      <SearchExpense />
      <div>{allExpenseVisibility && expense}</div>
    </div>
  );
}

// style imports
import SectionTitle from "../styles/SectionsTitle";
