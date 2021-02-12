import React from "react";
import Budget from "./Budget";
import "./BudgetList.css";
import { useGlobalContext } from "../context";

const BudgetList = () => {
  const { budgets, total } = useGlobalContext();
  return (
    <main className="budget-container">
      <div className="total-budget">
        <h2>{total}</h2>
      </div>
      <div className="budgets">
        {budgets.map((item) => {
          return <Budget key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};

export default BudgetList;
