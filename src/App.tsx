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
      <Greeting />
      <Cards />
      <MainContainer>
        {expenseExists && <Expenses />}
        <AddExpenseAddBudgetContainer>
          <AddExpense />
          <AddBudget />
        </AddExpenseAddBudgetContainer>
      </MainContainer>
    </Container>
  );
}

import Container from "./styles/Container";
import Greeting from "./components/Greeting";
import AddBudget from "./components/AddBudget";
import MainContainer from "./styles/main-content/MainContainer";
import AddExpenseAddBudgetContainer from "./styles/AddExpenseAddBudgetContainer";
