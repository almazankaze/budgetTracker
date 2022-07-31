import React from "react";
import ResetButton from "./ResetButton";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-content">
      <div className="logo">
        <h2>Budget</h2>
      </div>
      <ResetButton />
    </header>
  );
};

export default Header;
