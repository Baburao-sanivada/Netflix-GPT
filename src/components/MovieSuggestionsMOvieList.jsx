import React from "react";
import { MovieCard } from "./MovieCard";

const MovieSuggestionsMOvieList = ({ title, movies }) => {
  if (movies.length > 5) movies = movies.slice(0, 4);
  return (
    <div className="mb-8">
      <h1 className="text-2xl pt-4 pb-2 font-medium">{title}</h1>
      <div className="flex">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <MovieCard key={movie.id} data={movie} className="ml-0" />
            )
        )}
      </div>
    </div>
  );
};

export default MovieSuggestionsMOvieList;
