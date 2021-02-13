import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ amount, spent, barColor }) => {
  let barWidth = (spent / amount) * 100;

  if (barWidth >= 100) {
    barWidth = 100;
  }

  return (
    <div className="progress-container">
      <div
        className="progress-filler"
        style={{ width: `${barWidth}%`, backgroundColor: barColor }}
      >
        <span></span>
      </div>
    </div>
  );
};

export default ProgressBar;
