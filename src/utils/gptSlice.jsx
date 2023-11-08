import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    togglegpt: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { togglegpt } = gptSlice.actions;
export default gptSlice.reducer;
