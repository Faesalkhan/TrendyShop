import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    sum: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          items: updatedItems,
          sum: state.sum + action.payload.new_price,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
          sum: state.sum + action.payload.new_price,
          totalQuantity: state.totalQuantity + 1,
        };
      }
    },
    increaseItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      state.sum = state.sum + action.payload.new_price;
      state.totalQuantity = state.totalQuantity + 1;
    },
    decreaseItem: (state, action) => {
      state.items = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: Math.max(0, item.qty - 1) }
            : item
        )
        .filter((item) => item.qty > 0);
      state.sum = Math.max(0, state.sum - action.payload.new_price);
      state.totalQuantity = state.totalQuantity - 1;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        const totalPriceToRemove = itemToRemove.new_price * itemToRemove.qty;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.sum = state.sum - totalPriceToRemove;
        state.totalQuantity = state.totalQuantity - itemToRemove.qty;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, increaseItem, decreaseItem, removeItem } =
  cartSlice.actions;
