import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId != action.payload
      );
    },
    updateItem: (state, action) => {
      console.log(action.payload.quantity);
      state.cartItems = state.cartItems.map((item) => {
        return item.productId == action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });
    },
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
