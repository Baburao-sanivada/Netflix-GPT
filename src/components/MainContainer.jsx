import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  console.log(movies);
  const mainMovie = movies[0];
  return <div>MainContainer</div>;
};

export default MainContainer;
