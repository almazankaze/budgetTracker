import AddBudget from "./components/AddBudget";
import BudgetList from "./components/BudgetList";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Header />
      <Modal />
      <BudgetList />
      <AddBudget />
    </>
  );
}

export default App;
