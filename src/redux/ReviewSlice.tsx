import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getReview: any = createAsyncThunk("review/get", async () => {
  try {
    const response = await fetch(
      "https://holiday-1ee92-default-rtdb.europe-west1.firebasedatabase.app/Review.json"
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.error(error);
  }
});

export const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    items: [] as any,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReview.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getReview.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const ReviewAction = ReviewSlice.actions;
