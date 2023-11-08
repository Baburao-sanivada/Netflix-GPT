import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 px-2 py-2">
        <input
          type="text"
          placeholder="What would you like to watch today"
          className="col-span-9 m-2 px-2 rounded-md"
        />
        <button className="py-2 px-4 bg-red-700 col-span-3 m-2 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
