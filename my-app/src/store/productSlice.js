import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products", async () => {
  const responce = await axios.get("https://fakestoreapi.com/products");
  return responce.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (duilder) => {
    duilder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});
export default productSlice.reducer;
