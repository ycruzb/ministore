import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_PATH } from "../../utils/constants";

const initialState = {
  items: 0,
  sending: false,
  error: false,
  colorCode: 0,
  storageCode: 0,
};

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  const response = await fetch(`${API_BASE_PATH}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setColorCode: (state, action) => {
      state.colorCode = action.payload;
    },
    setStorageCode: (state, action) => {
      state.storageCode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.items = action.payload.count;
      state.sending = false;
      state.error = false;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.sending = false;
      state.error = true;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.sending = true;
      state.error = false;
    });
  },
});

export const { setColorCode, setStorageCode } = cartSlice.actions;

export default cartSlice.reducer;
