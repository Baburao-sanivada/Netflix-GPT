import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstants";
import openai from "../utils/openAI";
import { API_Options } from "../utils/constants";
import { addGptMoviesData, toggleShowSuggestions } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang_selected = useSelector((Store) => Store.language.lang);
  const searchText = useRef("");

  const getMovieDetails = async (movieName) => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const jsonData = await fetchData.json();

    return jsonData?.results;
  };

  const handleSearchClick = async () => {
    dispatch(toggleShowSuggestions(true));
    const gptQuery =
      "Act like a movie Recommendation System and suggest movies name with query :" +
      searchText?.current?.value +
      ". Give only 5 movies names ',' comma seperated as show in the example ahead . Example : MovieName1,MovieName2,MovieName3,MovieName4,MovieName5";

    const GptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(GptResult?.choices[0]?.message?.content);
    // ChatGpt api is not working so using Temporary movie list
    const GptmovieList = GptResult?.choices[0]?.message?.content.split(",");

    const promiseArray = GptmovieList.map((movie) => getMovieDetails(movie));
    const gptMovieDetails = await Promise.all(promiseArray);

    dispatch(
      addGptMoviesData({
        movieNames: GptmovieList,
        moviesInfo: gptMovieDetails,
      })
    );
    // console.log(gptMovieDetails);
  };

  return (
    <div className="-mt-[750px] md:-mt-[650px] flex justify-center mx-auto bg-black bg-opacity-40">
      <form
        className=" w-3/4 md:w-5/12 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[lang_selected].gptSearchPlaceHolder}
          className="col-span-9 px-2 md:px-4 pl-3 md:pl-6 py-3 rounded-l-md"
        />
        <button
          className="py-2 px-4 bg-red-700 col-span-3  text-white rounded-r-md rounded-l-sm"
          onClick={handleSearchClick}
        >
          {lang[lang_selected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
