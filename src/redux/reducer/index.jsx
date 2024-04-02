import { combineReducers } from "redux";
import practiceReducer from "./practiceReducer";
import contactReducer from "./contactReducer";
import productReducer from "./productReducer";
import authenciateReducer from "./authenciateReducer";

export default combineReducers({
  practice: practiceReducer,
  contact: contactReducer,
  product: productReducer,
  auth: authenciateReducer,
})