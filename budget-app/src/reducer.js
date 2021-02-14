import currency from "currency.js";
import { unstable_concurrentAct } from "react-dom/test-utils";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const startAmount = currency(action.payload.amount).value;

    const newBudget = {
      id: 5,
      name: action.payload.name,
      amount: startAmount,
      spent: 0.0,
      saved: startAmount,
      over: 0.0,
      barColor: "teal",
    };

    return {
      ...state,
      budgets: [...state.budgets, newBudget],
      currentBudget: newBudget,
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      budgets: state.budgets.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "SPEND") {
    let tempBudgets = state.budgets.map((item) => {
      if (item.id === action.payload.id) {
        const spent = currency(item.spent).add(action.payload.spent).value;
        const saved = currency(item.amount).subtract(spent).value;
        return {
          ...item,
          spent: spent,
          saved: saved,
          barColor: item.spent > item.amount ? "red" : "teal",
        };
      }
      return item;
    });
    return { ...state, budgets: tempBudgets };
  }

  if (action.type === "EDIT") {
    let tmpBudgets = state.budgets.map((item) => {
      return item.id == action.payload.id
        ? {
            ...item,
            name: action.payload.name,
            amount: currency(action.payload.amount).value,
            saved: currency(action.payload.amount).subtract(item.spent).value,
          }
        : item;
    });

    return { ...state, budgets: tmpBudgets };
  }

  if (action.type === "EDITING") {
    if (action.payload.type !== "add") {
      let tmpBudget = state.budgets.find(
        (item) => item.id == action.payload.id
      );
      return { ...state, currentBudget: tmpBudget };
    }
  }

  return state;
};

export default reducer;
