import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

// Should be allowed to browse page on when Login/signUp is Successful
const BrowsePage = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
    </div>
  );
};

export default BrowsePage;
