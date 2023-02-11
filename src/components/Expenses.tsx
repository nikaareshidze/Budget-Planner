import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// component imports
import ExpenseItem from "./ExpenseItem";
import SearchExpense from "./SearchExpense";

export default function Expenses() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);
  const searchWord = useSelector(
    (state: RootState) => state.expense.searchWord
  );

  const expense = expenses.map(function (item) {
    return <ExpenseItem item={item} />;
  });

  return (
    <div>
      <SectionTitle>Expenses</SectionTitle>
      <SearchExpense />
      <div>{searchWord.length == 0 && expense}</div>
    </div>
  );
}

// style imports
import SectionTitle from "../styles/SectionsTitle";
