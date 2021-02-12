import React from "react";
import "./AddBudget.css";
import { IoMdAdd } from "react-icons/io";

const AddBudget = () => {
  return (
    <div className="add-container">
      <div className="add-btn">
        <IoMdAdd size={24} className="fill" />
      </div>
      <div className="instructions">
        <p>Add a new budget!</p>
      </div>
    </div>
  );
};

export default AddBudget;
