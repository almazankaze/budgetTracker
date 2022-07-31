import AddBudget from "./components/AddBudget";
import BudgetList from "./components/BudgetList";
import Header from "./components/header/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <Header />
      <Modal />
      <BudgetList />
      <AddBudget />
    </div>
  );
}

export default App;
