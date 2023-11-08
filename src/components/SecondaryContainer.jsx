import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies.nowPlayingMovies);
  // console.log(movieList);
  return (
    movieList && (
      <div className="p-2  mt-10">
        <div className="">
          <MovieList title={"Now Playing"} movies={movieList} />
          <MovieList title={"Trending"} movies={movieList} />
          <MovieList title={"upcoming"} movies={movieList} />
          <MovieList title={"Thriller"} movies={movieList} />
          <MovieList title={"Comedy"} movies={movieList} />
          <MovieList title={"Horror"} movies={movieList} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
