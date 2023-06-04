import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },

    decreaseItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.quantity == 1) {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
        itemInCart.quantity = 0;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
