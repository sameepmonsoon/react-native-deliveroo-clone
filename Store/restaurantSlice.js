import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  items: [],
};
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialValues,
  reducers: {
    addRestaurant: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});
export const { addRestaurant } = restaurantSlice.actions;
export const selecRestaurantItems = (state) => state.restaurant.items;
export default restaurantSlice.reducer;
