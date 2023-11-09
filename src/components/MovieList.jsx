import React from "react";
import { MovieCard } from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(title + " " + movies);
  return (
    <div className="">
      <h1 className="text-3xl my-4">{title}</h1>
      <div className="flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;