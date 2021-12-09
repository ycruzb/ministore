import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import searchReducer from "../features/products/searchSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    cart: cartSlice,
  },
});
