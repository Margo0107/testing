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
  },
});
export const { addToCart } = cardSlice.actions;
export default cardSlice.reducer;
