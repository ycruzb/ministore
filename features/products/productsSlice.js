import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_PATH = "https://front-test-api.herokuapp.com/api";

const initialState = {
  products: [],
  loading: true,
  error: false,
};

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await fetch(`${API_BASE_PATH}/product`);
  return response.json();
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.loading = false;
      state.error = true;
    });
  },
});

export default productsSlice.reducer;
