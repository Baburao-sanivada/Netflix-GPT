import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    trendingMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addtopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrendingMovies,
  addupcomingMovies,
  addtopratedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
