import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';
import contactReducer from "./reducer/contactSlice";
import productReducer from "./reducer/productSlice";
import authenciateReducer from "./reducer/authenciateSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    product: productReducer,
    auth: authenciateReducer,
  }
})

export default store