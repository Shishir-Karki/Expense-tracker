import { createStore } from 'redux';

const initialState = {
  budget: 0,
  expenses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload
      };
    default:
      return state;
  }
};

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense
});

export const setBudget = (amount) => ({
  type: 'SET_BUDGET',
  payload: amount
});

export default createStore(reducer);