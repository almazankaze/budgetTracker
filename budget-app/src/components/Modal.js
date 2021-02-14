import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    add,
    edit,
    remove,
    spend,
    modalType,
    currentBudget,
    isValid,
    notifyBadInput,
  } = useGlobalContext();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const cleanUp = () => {
    closeModal();
    setName("");
    setAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalType === "remove") {
      remove(currentBudget.id);
      cleanUp();
    }

    if (modalType === "add") {
      if (name && amount && !isNaN(amount)) {
        add(name, amount);
        cleanUp();
      } else {
        notifyBadInput();
      }
    }

    if (modalType === "spend") {
      if (!amount || isNaN(amount)) {
        notifyBadInput();
      } else {
        spend(currentBudget.id, amount);
        cleanUp();
      }
    }

    if (modalType === "edit") {
      if (!name) {
        setName(currentBudget.name);
      }

      if (!amount) {
        setAmount(currentBudget.amount);
      }

      if (name && amount && !isNaN(amount)) {
        edit(currentBudget.id, name, amount);
        cleanUp();
      } else {
        notifyBadInput();
      }
    }
  };

  let form;

  if (modalType === "remove") {
    form = (
      <div className="form-remove">
        <h4>
          You are about to delete the budget '{currentBudget.name}.' Are you
          sure?
        </h4>
        <button className="btn modal-btn" type="submit" onClick={handleSubmit}>
          yes
        </button>
      </div>
    );
  } else if (modalType === "spend") {
    form = (
      <div className="form-control">
        <span
          className={`${
            isValid ? "error-message" : "error-message show-error"
          }`}
        >
          please enter a valid amount
        </span>
        <input
          type="text"
          className="input-style"
          placeholder="amount spent"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn modal-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  } else {
    form = (
      <div className="form-control">
        <span
          className={`${
            isValid ? "error-message" : "error-message show-error"
          }`}
        >
          one or both fields are invalid
        </span>
        <input
          type="text"
          className="input-style"
          placeholder={currentBudget.name || "name for budget"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input-style"
          placeholder={currentBudget.amount || "starting amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn modal-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <button className="close-modal-btn" onClick={() => cleanUp()}>
          <FaTimes></FaTimes>
        </button>
        {form}
      </div>
    </div>
  );
};

export default Modal;
