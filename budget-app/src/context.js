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

  return (
    <AppContext.Provider
      value={{
        ...state,
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
