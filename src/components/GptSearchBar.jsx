import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/langConstants";

const GptSearchBar = () => {
  const lang_selected = useSelector((Store) => Store.language.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 px-2 py-2">
        <input
          type="text"
          placeholder={lang[lang_selected].gptSearchPlaceHolder}
          className="col-span-9 m-2 px-2 rounded-md"
        />
        <button className="py-2 px-4 bg-red-700 col-span-3 m-2 text-white rounded-lg">
          {lang[lang_selected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
