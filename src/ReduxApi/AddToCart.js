import { createSlice } from "@reduxjs/toolkit";
let storedCart = JSON.parse(localStorage.getItem("cart")) || null;
const initialState = {
  cart: storedCart ? storedCart.cart : [],
  cartItem: storedCart ? storedCart.cartItem : 0,
  cartPrice: storedCart ? storedCart.cartPrice : 0,
};

export const cartSlice = createSlice({
  name: "cartitems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      console.log(data);
      state.cart.push(data);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    totalItems: (state) => {
      state.cartItem = state.cart.length;
    },
  },
});

export const { addToCart, totalItems } = cartSlice.actions;
export default cartSlice.reducer;
