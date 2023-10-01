import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (
        !state.cartItems.find(
          (item) => item.productId == action.payload.productId
        )
      ) {
        state.cartItems = [...state.cartItems, action.payload];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId != action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        return item.productId == action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        return item.productId == action.payload
          ? { ...item, quantity: item.quantity != 1 ? item.quantity - 1 : 1 }
          : item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
