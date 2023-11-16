import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { addGptMoviesData, toggleShowSuggestions } from "../utils/gptSlice";
import Shimmer from "./Shimmer";
import MovieSuggestionsMovieList from "./MovieSuggestionsMOvieList";

const GptMovieSuggestions = () => {
  const dispatch = useDispatch();
  const { gptMovieNames, gptMoviesInfo } = useSelector((store) => store.gpt);

  const handleCloseSuggestions = () => {
    dispatch(toggleShowSuggestions(false));
    dispatch(
      addGptMoviesData({
        movieNames: null,
        moviesInfo: null,
      })
    );
  };
  return (
    <div className="w-full p-4 px-8  bg-black text-white absolute top-14">
      <div>
        <span
          onClick={handleCloseSuggestions}
          className="cursor-pointer absolute right-4 top-4"
        >
          <AiOutlineClose className="text-2xl " />
        </span>
        {!gptMovieNames && <Shimmer />}
        {gptMovieNames &&
          // Should work on gpt movie suggesstions
          gptMovieNames.map((movie, index) => (
            <MovieSuggestionsMovieList
              key={movie}
              title={movie}
              movies={gptMoviesInfo[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
