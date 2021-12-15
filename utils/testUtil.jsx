import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer from "../features/products/productsSlice";
import searchReducer from "../features/products/searchSlice";
import breadcrumbReducer from "../features/breadcrumb/breadcrumbSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        products: productsReducer,
        search: searchReducer,
        breadcrumb: breadcrumbReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
