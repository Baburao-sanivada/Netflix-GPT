import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMoviesInfo: null,
    showSuggestions: false,
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
    toggleShowSuggestions: (state, action) => {
      state.showSuggestions = action.payload;
    },
  },
});

export const { togglegpt, addGptMoviesData, setGpt, toggleShowSuggestions } =
  gptSlice.actions;
export default gptSlice.reducer;
