import React, { useState, useContext, useReducer, useEffect } from "react";
import budgets from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  budgets: budgets,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const add = (name, amount) => {
    dispatch({ type: "ADD", payload: { name, amount } });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const spend = (id, spent) => {
    dispatch({ type: "SPEND", payload: { id, spent } });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isModalOpen,
        add,
        remove,
        spend,
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
