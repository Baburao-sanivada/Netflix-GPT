import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import loginpageBgImage from "../utils/Images/loginPageBgImage.jpg";

const GptSearchPage = () => {
  return (
    <div>
      {/* Backgorund Image */}
      <div className="fixed -z-10">
        <img className="" src={loginpageBgImage} alt="BackGorund Image"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
