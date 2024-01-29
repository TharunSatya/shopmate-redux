import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const cartTotal = state.total + action.payload.price;
      return { ...state, total: cartTotal, cartList: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (eachItem) => action.payload.id !== eachItem.id
      );
      const cartTotal = state.total - action.payload.price;
      return { ...state, total: cartTotal, cartList: updatedCartList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
