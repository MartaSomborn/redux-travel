import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPopularDestination: any = createAsyncThunk(
  "popularTravel/get",
  async () => {
    try {
      const response = await fetch(
        "https://holiday-1ee92-default-rtdb.europe-west1.firebasedatabase.app/Holiday.json"
      ).then((response) => response.json());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const PopularTravelSlice = createSlice({
  name: "popularTravel",
  initialState: {
    items: [] as any,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularDestination.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPopularDestination.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getPopularDestination.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const PopularTravelAction = PopularTravelSlice.actions;
