const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newBudget = {
      id: 5,
      name: action.payload.name,
      amount: action.payload.amount,
      spent: 0.0,
      saved: action.payload.amount,
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
        return {
          ...item,
          spent: item.spent + action.payload.spent,
          saved: item.amount - (item.spent + action.payload.spent),
          barColor:
            item.spent + action.payload.spent > item.amount ? "red" : "teal",
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
            amount: action.payload.amount,
            spent: 0,
            saved: action.payload.amount,
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
