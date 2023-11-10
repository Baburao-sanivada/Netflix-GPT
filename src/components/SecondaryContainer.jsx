import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  return (
    movieList.nowPlayingMovies && (
      <div className="mt-10 bg-black pl-16">
        <div className="bg-black text-white">
          <MovieList
            title={"Now Playing"}
            movies={movieList?.nowPlayingMovies}
          />
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
      </div>
    )
  );
};

export default SecondaryContainer;
