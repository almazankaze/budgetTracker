import React from "react";
import { useGlobalContext } from "../../context";
import "./ResetButton.css";

const ResetButton = () => {
  const { openModal } = useGlobalContext();
  return (
    <button className="btn reset-btn" onClick={() => openModal("reset", -1)}>
      Reset
    </button>
  );
};

export default ResetButton;
