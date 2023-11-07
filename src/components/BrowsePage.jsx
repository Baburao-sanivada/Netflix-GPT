import React, { useEffect } from "react";
import Header from "./Header";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

// Should be allowed to browse page on when Login/signUp is Successful
const BrowsePage = () => {
  const dispatch = useDispatch();

  const NowPlayList = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const jsonData = await fetchData.json();
    console.log(jsonData?.results);
    dispatch(addNowPlayingMovies(jsonData?.results));
  };

  useEffect(() => {
    NowPlayList();
  }, []);

  return (
    <div className="">
      <Header />
    </div>
  );
};

export default BrowsePage;
