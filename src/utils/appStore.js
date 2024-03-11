import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    restaurantSlice: restaurantReducer,
    cartSlice: cartReducer,
  },
});

export default appStore;
