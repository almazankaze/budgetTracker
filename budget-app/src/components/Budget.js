import React from "react";
import "./Budget.css";
import { useGlobalContext } from "../context";
import { BsTrash } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";

const Budget = ({ id, name, amount, spent, saved, over }) => {
  return (
    <div className="budget">
      <div className="top-row">
        <h3 className="budget-name">{name}</h3>

        <ul className="btn-icons">
          <li className="spend">
            <TiShoppingCart />
          </li>
          <li className="edit">
            <VscEdit />
          </li>
          <li className="remove">
            <BsTrash />
          </li>
        </ul>
      </div>
      <h3 style={{ textAlign: "center" }}>${amount}</h3>
      <hr></hr>
      <div className="bottom-row">
        <div className="spent">
          <h4>Spent: </h4>
          <h4>${spent}</h4>
        </div>
        <div className="saved">
          <h4>Saved: </h4>
          <h4>Saved: </h4>
        </div>
      </div>
    </div>
  );
};

export default Budget;
