import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  items: [],
};
export const cartSlice = createSlice({
  name: "basket",
  initialState: initialValues,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const itemId = action.payload.id;
      const index = state.items.filter((item) => item.id !== itemId);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert("Can't Remove");
      }
      state.items = newBasket;
    },
  },
});
export const { addToBasket, removeFromBasket } = cartSlice.actions;
export const selecBasketItems = (state) => state.basket.items;
export const selecBasketItemsWithId = (state, id) => {
  return state.basket.items.filter((item) => item.id === id);
};

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, items) => (total += items.price), 0);
export default cartSlice.reducer;
