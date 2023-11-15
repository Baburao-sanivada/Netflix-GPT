import React from "react";

const MovieSuggestionsMOvieList = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl pt-4 pb-2 font-medium">{title}</h1>
      <div>
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
