import Cards from "./components/Cards";
import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";

import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function App() {
  const expenses = useSelector((state: RootState) => state.expense.expenses);

  const expenseExists = expenses.length > 0;

  return (
    <Container>
      {/* <SearchExpense /> */}
      <Greeting />
      <Cards />
      <div style={{ display: "flex", gap: "1em" }}>
        {expenseExists && <Expenses />}
        <div style={{ width: "33%" }}>
          <AddExpense />
          <AddBudget />
        </div>
      </div>
    </Container>
  );
}

import Container from "./styles/Container";
import SectionTitle from "./styles/SectionsTitle";
import Greeting from "./components/Greeting";
import SearchExpense from "./components/SearchExpense";
import AddBudget from "./components/AddBudget";
