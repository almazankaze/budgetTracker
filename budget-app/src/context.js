import React, { useState, useContext, useReducer, useEffect } from "react";
import budgets from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  budgets: budgets,
  currentBudget: {},
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const add = (name, amount) => {
    dispatch({ type: "ADD", payload: { name, amount } });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const spend = (id, spent) => {
    dispatch({ type: "SPEND", payload: { id, spent } });
  };

  const edit = (id, name, amount) => {
    dispatch({ type: "EDIT", payload: { id, name, amount } });
  };

  const openModal = (type, id) => {
    setIsModalOpen(true);
    setModalType(type);
    dispatch({ type: "EDITING", payload: { type, id } });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isModalOpen,
        modalType,
        add,
        remove,
        spend,
        edit,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
