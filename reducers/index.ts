import { combineReducers } from "redux";

const incrementReducer = (state, action) => {
  let value = 1;
  console.log("increment Reducer", state, value);
  if (action.type === "increment_value") {
    value = state + 1;
  }
  return value;
};

export default combineReducers({ value: incrementReducer });
