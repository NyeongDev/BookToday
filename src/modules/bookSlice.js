import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "createReview",
  initialState: [],
  reducers: {
    createReview: (state, action) => {
      // console.log("@state", state);
      // console.log("@action.payload", action.payload);
      const id = state[state.length - 1]?.id + 1 || 0;
      state.push({ ...action.payload, id });
      // {title:"", body:""}
    },
    getReviewList: (state, action) => {},
  },
});

export const { createReview } = bookSlice.actions;
export default bookSlice.reducer;
