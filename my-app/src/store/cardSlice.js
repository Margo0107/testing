import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCard: 0,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalCard++;
    },
    removeFromCard(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
