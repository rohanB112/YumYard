import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: null,
    restaurantMenu: null,
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addRestaurantMenu: (state, action) => {
      state.restaurantMenu = action.payload;
    },
  },
});

export const { addRestaurants, addRestaurantMenu } = restaurantSlice.actions;
export default restaurantSlice.reducer;
