import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

// Should be allowed to browse page on when Login/signUp is Successful
const BrowsePage = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default BrowsePage;
