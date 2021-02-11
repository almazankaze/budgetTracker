import React from 'react';
import Budget from './Budget';
import './BudgetList.css';

const BudgetList = () => {
  return (
    <div className="list">
      <Budget />
      <Budget />
    </div>
  );
};

export default BudgetList;
