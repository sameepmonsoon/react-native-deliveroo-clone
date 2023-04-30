import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./cartSlice";
export default configureStore({
  reducer: { basket: basketReducer },
});
