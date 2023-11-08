import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  console.log(movieList?.upcomingMovies);
  return (
    movieList.nowPlayingMovies &&
    movieList?.trendingMovies && (
      <div className="p-2  mt-10">
        <div className="bg-black text-white">
          <MovieList
            title={"Now Playing"}
            movies={movieList?.nowPlayingMovies}
          />
          <MovieList title={"Trending"} movies={movieList?.trendingMovies} />
          <MovieList title={"Top Rated"} movies={movieList?.topratedMovies} />
          <MovieList title={"Upcoming"} movies={movieList?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
