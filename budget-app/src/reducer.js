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

    return { ...state, budgets: [...state.budgets, newBudget] };
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

  return state;
};

export default reducer;
