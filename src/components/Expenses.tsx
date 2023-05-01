import { useSelector } from "react-redux";
import { RootState } from "../store/store";

//component imports
import ExpenseItem from "./ExpenseItem";

export default function Expenses() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const expense = expenses.map(function (item) {
    return <ExpenseItem item={item} />;
  });

  return (
    <TransactionContainer>
      <div style={{ marginBottom: "16px" }}>
        <SectionTitle>Transactions</SectionTitle>
      </div>
      <ExpenseContainer>{expense}</ExpenseContainer>
    </TransactionContainer>
  );
}

//style imports
import SectionTitle from "../styles/SectionTitle";
import ExpenseContainer from "../styles/expenses/ExpenseContainer";
import TransactionContainer from "../styles/TransactionContainer";
