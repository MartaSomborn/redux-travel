import { PopularTravelSlice } from "./PopularTravelSlice";
import { configureStore } from "@reduxjs/toolkit";
import { ReviewSlice } from "./ReviewSlice";
import { OfferSlice } from "./OfferSlice";

export const store = configureStore({
  reducer: {
    PopularTravel: PopularTravelSlice.reducer,
    Review: ReviewSlice.reducer,
    Offer: OfferSlice.reducer,
  },
});
