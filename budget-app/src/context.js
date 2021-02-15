import React, { useState, useContext, useReducer, useEffect } from "react";
import budgets from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("budgets");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("budgets")));
  } else {
    return [];
  }
};

const initialState = {
  budgets: getLocalStorage(),
  currentBudget: {},
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isValid, setIsValid] = useState(true);

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

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const openModal = (type, id) => {
    setIsModalOpen(true);
    setModalType(type);
    dispatch({ type: "EDITING", payload: { type, id } });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsValid(true);
  };

  const notifyBadInput = () => {
    setIsValid(false);
  };

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(state.budgets));
  }, [state.budgets]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isModalOpen,
        modalType,
        isValid,
        add,
        remove,
        spend,
        edit,
        reset,
        openModal,
        closeModal,
        notifyBadInput,
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
