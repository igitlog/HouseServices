import { combineReducers } from "redux";
import { setAddressChoiseReducer } from "./otherReducers/setAddressChoiseReducer";
import { setClientsReducer } from "./otherReducers/setClientsReducer";

export const rootReducer = combineReducers({
  setAddressChoiseReducer,
  setClientsReducer,
});