import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterReducer';
import contactReducer from "./reducer/contactReducer";
import productReducer from "./reducer/productReducer";
import authenciateReducer from "./reducer/authenciateReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    product: productReducer,
    auth: authenciateReducer,
  }
})

export default store