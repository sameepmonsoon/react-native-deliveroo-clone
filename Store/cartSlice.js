import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  items: [],
};
export const cartSlice = createSlice({
  name: "basket",
  initialState: initialValues,
  reducers: {
    addToBasket: (state, action) => {
      alert(action.payload);
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value_ = 1;
    },
  },
});
export const { addToBasket, removeFromBasket } = cartSlice.actions;
export const selecBasketItems = (state) => state.basket.items;
export const selecBasketItemsWithId = (state, id) => {
  state.basket.items.filter((item) => item.id === id);
};
export default cartSlice.reducer;
