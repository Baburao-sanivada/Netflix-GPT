import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { AiOutlineClose } from "react-icons/ai";
import { toggleShowSuggestions } from "../utils/gptSlice";

const GptMovieSuggestions = () => {
  const dispatch = useDispatch();
  const { gptMovieNames, gptMoviesInfo } = useSelector((store) => store.gpt);

  const handleCloseSuggestions = () => {
    dispatch(toggleShowSuggestions(false));
  };
  if (!gptMovieNames) return null;
  return (
    <div className="w-full p-4 px-8  bg-black text-white bg-opacity-90 absolute top-14">
      <span
        onClick={handleCloseSuggestions}
        className="cursor-pointer absolute right-4 top-4"
      >
        <AiOutlineClose className="text-2xl " />
      </span>
      {gptMovieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMoviesInfo[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
