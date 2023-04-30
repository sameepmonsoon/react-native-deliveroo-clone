import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./cartSlice";
import restaurantReducer from "./restaurantSlice";
export default configureStore({
  reducer: { basket: basketReducer ,restaurant:restaurantReducer},
});
