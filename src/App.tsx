import Cards from "./components/Cards";
import AddExpense from "./components/add expenses/AddExpense";
import Expenses from "./components/expenses/Expenses";

import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function App() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const expenseExists = expenses.length > 0;

  return (
    <Container>
      <SectionTitle>My Budget Planner</SectionTitle>
      <Cards />
      {expenseExists && <Expenses />}
      <AddExpense />
    </Container>
  );
}

import Container from "./styles/Container";
import SectionTitle from "./styles/SectionsTitle";
