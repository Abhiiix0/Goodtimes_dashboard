import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartItem: 0,
  cartPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartitems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      console.log(data);
      state.cart.push(data);
    },
    totalItems: (state) => {
      state.cartItem = state.cart.length;
    },
  },
});

export const { addToCart, totalItems } = cartSlice.actions;
export default cartSlice.reducer;
