import React from 'react';
import AddBudget from './AddBudget';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h1>Budget</h1>
        </div>
        <AddBudget />
      </div>
    </header>
  );
};

export default Header;
