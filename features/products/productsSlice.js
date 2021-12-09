import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_PATH } from "../../utils/constants";

const initialState = {
  products: [],
  loading: true,
  error: false,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await fetch(`${API_BASE_PATH}/product`);
    return response.json();
  }
);

// Se pudo realizar un filtraje directamente sobre lo que ya se tiene pero se ha decidido
// recrear una llamada a api que es lo mas habitual, ya que en este caso no hay un endpoint
// para la busqueda
export const searchProducts = createAsyncThunk(
  "products/search",
  async (searchText) => {
    const response = await fetch(`${API_BASE_PATH}/product`);
    const products = await response.json();
    const result = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchText.trim().toLowerCase()) ||
        product.model.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.products = [];
      state.loading = false;
      state.error = true;
    });
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products = [];
      state.loading = true;
      state.error = false;
    });

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(searchProducts.rejected, (state) => {
      state.products = [];
      state.loading = false;
      state.error = true;
    });
    builder.addCase(searchProducts.pending, (state) => {
      state.products = [];
      state.loading = true;
      state.error = false;
    });
  },
});

export default productsSlice.reducer;
