import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [], // {id,image,oldPrice,NewPrice,TotalQuantity,TotalAmount}
  totalQuantity: 0,
  totalAmount: 0,
};
const cartslice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    AddItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.TotalQuantity++;
        existingItem.TotalAmount += existingItem.NewPrice;
        state.totalQuantity++;
        state.totalAmount += existingItem.NewPrice;
      } else {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          oldPrice: newItem.oldPrice,
          NewPrice: newItem.NewPrice,
          TotalQuantity: 1,
          TotalAmount: newItem.NewPrice,
          title: newItem.title,
        });
        state.totalQuantity++;
        state.totalAmount += newItem.NewPrice;
      }
    },
    AddItemByQuantity(state, action) {
      const newItem = action.payload.item;
      const quantity = action.payload.quantity;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.TotalQuantity += quantity;
        existingItem.TotalAmount += existingItem.NewPrice * quantity;
        state.totalQuantity += quantity;
        state.totalAmount += existingItem.NewPrice * quantity;
      } else {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          oldPrice: newItem.oldPrice,
          NewPrice: newItem.NewPrice,
          TotalQuantity: quantity,
          TotalAmount: newItem.NewPrice * quantity,
          title: newItem.title,
        });
        state.totalQuantity += quantity;
        state.totalAmount += newItem.NewPrice * quantity;
      }
    },
    DecreaseAmountItem(state, action) {
      const id = action.payload;
      console.log("from cart.js", id);
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.TotalQuantity === 1) {
        // state.items = state.items.filter((item) => item.id !== id);
        // state.totalQuantity--;
        // state.totalAmount -= existingItem.NewPrice;
      } else {
        existingItem.TotalQuantity--;
        existingItem.TotalAmount -= existingItem.NewPrice;
        state.totalQuantity--;
        state.totalAmount -= existingItem.NewPrice;
      }
    },
    ClearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    RemoveItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity -= existingItem.TotalQuantity;
      state.totalAmount -= existingItem.TotalAmount;
    },
  },
});
export const CartActions = cartslice.actions;
export default cartslice.reducer;
