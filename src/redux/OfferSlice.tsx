import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOffer: any = createAsyncThunk("offer/get", async () => {
  try {
    const response = await fetch(
      "https://holiday-1ee92-default-rtdb.europe-west1.firebasedatabase.app/Offers.json"
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.error(error);
  }
});

export const OfferSlice = createSlice({
  name: "offer",
  initialState: {
    items: [] as any,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOffer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOffer.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getOffer.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const PopularTravelAction = OfferSlice.actions;
