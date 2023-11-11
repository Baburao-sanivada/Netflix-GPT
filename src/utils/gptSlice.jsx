import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMoviesInfo: null,
  },
  reducers: {
    togglegpt: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setGpt: (state, action) => {
      state.showGptSearch = action.payload;
    },
    addGptMoviesData: (state, action) => {
      state.gptMovieNames = action.payload.movieNames;
      state.gptMoviesInfo = action.payload.moviesInfo;
    },
  },
});

export const { togglegpt, addGptMoviesData, setGpt } = gptSlice.actions;
export default gptSlice.reducer;
