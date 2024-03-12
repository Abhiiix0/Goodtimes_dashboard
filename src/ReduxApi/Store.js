import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./AddToCart";
import rootUser from "./authSlice";
export const Store = configureStore({
  reducer: {
    cart: cartreducer,
    auth: rootUser,
  },
});
