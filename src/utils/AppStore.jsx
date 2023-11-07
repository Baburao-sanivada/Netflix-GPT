import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
  },
});
export default AppStore;
