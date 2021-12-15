import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import searchReducer from "../features/products/searchSlice";
import cartReducer from "../features/cart/cartSlice";
import breadcrumbReducer from "../features/breadcrumb/breadcrumbSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    cart: cartReducer,
    breadcrumb: breadcrumbReducer,
  },
});
