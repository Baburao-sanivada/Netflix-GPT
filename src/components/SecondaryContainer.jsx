import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  return (
    movieList.nowPlayingMovies && (
      <div className="bg-black pl-12 text-white py-4">
        <MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies} />
        {movieList?.trendingMovies && (
          <MovieList title={"Trending"} movies={movieList?.trendingMovies} />
        )}
        {movieList?.topratedMovies && (
          <MovieList title={"Top Rated"} movies={movieList?.topratedMovies} />
        )}
        {movieList?.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movieList?.upcomingMovies} />
        )}
      </div>
    )
  );
};

export default SecondaryContainer;
