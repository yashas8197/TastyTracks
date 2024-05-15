import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSlice,
  },
});

export default appStore;
