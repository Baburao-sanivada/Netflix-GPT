import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMoviesInfo } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;
  return (
    <div className="p-4 m-2 bg-black text-white bg-opacity-80">
      {gptMovieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMoviesInfo[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
