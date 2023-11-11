import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

// Should be allowed to browse page on when Login/signUp is Successful
const BrowsePage = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // const handleScroll = (event) => {
  //   console.log("Scrolled Down");
  //   let scrollTop = event.srcElement.body.scrollTop;
  //   console.log(scrollTop);
  // };

  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default BrowsePage;
