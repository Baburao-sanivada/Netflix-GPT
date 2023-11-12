import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    <div className="bg-black pl-12 text-white py-4">
      <div className="relative -mt-4 md:-mt-52 z-40">
        <MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies} />

        <MovieList title={"Trending"} movies={movieList?.trendingMovies} />

        <MovieList title={"Top Rated"} movies={movieList?.topratedMovies} />

        <MovieList title={"Upcoming"} movies={movieList?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
