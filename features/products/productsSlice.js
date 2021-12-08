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
    builder.addCase(fetchProducts.pending, (state) => {
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
