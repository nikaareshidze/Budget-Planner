import Cards from "./components/Cards";
import AddExpense from "./components/add expenses/AddExpense";

export default function App() {
  return (
    <div>
      <h1>My Budget Planner</h1>
      <Cards />
      <AddExpense />
    </div>
  );
}
