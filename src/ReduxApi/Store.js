import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./AddToCart";
export const Store = configureStore({
  reducer: cartreducer,
});
