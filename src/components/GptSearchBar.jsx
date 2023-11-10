import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstants";
import openai from "../utils/openAI";
import { API_Options } from "../utils/constants";
import { addGptMoviesData } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang_selected = useSelector((Store) => Store.language.lang);
  const searchText = useRef();

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

  const gptQuery =
    "Act like a movie Recommendation System and suggest movies name with query :" +
    searchText?.current?.value +
    ". Give only 5 movies names ',' comma seperated as show in the example ahead . Example : MovieName1,MovieName2,MovieName3,MovieName4,MovieName5";
  const handleSearchClick = async () => {
    // const GptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: "Say this is a test" }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(GptResult);
    console.log(searchText.current.value);
    // ChatGpt api is not working so using Temporary movie list
    const GptmovieList = ["Salaar", "MAD", "Animal", "Arjun Reddy", "premam"];

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
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 px-2 py-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[lang_selected].gptSearchPlaceHolder}
          className="col-span-9 m-2 px-2 rounded-md"
        />
        <button
          className="py-2 px-4 bg-red-700 col-span-3 m-2 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[lang_selected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
