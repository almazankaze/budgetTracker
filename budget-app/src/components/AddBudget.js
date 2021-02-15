import React from "react";
import "./AddBudget.css";
import { useGlobalContext } from "../context";
import { IoMdAdd } from "react-icons/io";

const AddBudget = () => {
  const { openModal } = useGlobalContext();
  return (
    <div className="add-container">
      <div className="add-btn" onClick={() => openModal("add")}>
        <IoMdAdd size={24} className="fill" />
      </div>
      <div className="instructions">
        <p>Add a new budget!</p>
      </div>
    </div>
  );
};

export default AddBudget;
