import { PopularTravelSlice } from "./PopularTravelSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    PopularTravel: PopularTravelSlice.reducer,
  },
});
