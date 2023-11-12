import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import loginpageBgImage from "../utils/Images/loginPageBgImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSuggestions } from "../utils/gptSlice";

const GptSearchPage = () => {
  const dispatch = useDispatch();
  const showSuggestions = useSelector((store) => store.gpt.showSuggestions);
  return (
    <div className="">
      {/* Backgorund Image */}
      <img
        className="fixed -z-10 h-[800px] object-cover"
        src={loginpageBgImage}
        alt="BackGorund Image"
      ></img>
      {!showSuggestions && <GptSearchBar />}
      {showSuggestions && <GptMovieSuggestions />}
    </div>
  );
};

export default GptSearchPage;
