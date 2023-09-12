import { createSlice } from "@reduxjs/toolkit";

const initialuserState = {
  user: {},
  token: null,
  // expire: null,
};
const userslice = createSlice({
  name: "user",
  initialState: initialuserState,
  reducers: {
    // AddItem(state, action) {
    //   const newItem = action.payload;
    //   const existingItem = state.items.find((item) => item.id === newItem.id);
    //   if (existingItem) {
    //     existingItem.TotalQuantity++;
    //     existingItem.TotalAmount += existingItem.NewPrice;
    //     state.totalQuantity++;
    //     state.totalAmount += existingItem.NewPrice;
    //   } else {
    //     state.items.push({
    //       id: newItem.id,
    //       image: newItem.image,
    //       oldPrice: newItem.oldPrice,
    //       NewPrice: newItem.NewPrice,
    //       TotalQuantity: 1,
    //       TotalAmount: newItem.NewPrice,
    //       title: newItem.title,
    //     });
    //     state.totalQuantity++;
    //     state.totalAmount += newItem.NewPrice;
    //   }
    // },
    SignInGoogle(state, action) {
      const user = action.payload;
      state.user = user;
    },
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
    },
    // setExpire(state, action) {
    //   const expire = action.payload;
    //   state.expire = expire;
    // },
    Removedata(state) {
      state.user = {};
      state.token = null;
    },
  },
});
export const userActions = userslice.actions;
export default userslice.reducer;
