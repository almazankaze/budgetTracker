import React from "react";
import Budget from "./Budget";
import "./BudgetList.css";
import { useGlobalContext } from "../context";

const BudgetList = () => {
  const { budgets } = useGlobalContext();

  return (
    <main className="budget-container">
      <div className="budgets">
        {budgets.map((item) => {
          return <Budget key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};

export default BudgetList;
