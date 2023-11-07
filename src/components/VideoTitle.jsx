import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-24 px-10">
      <h1 className="font-bold text-xl my-4">{title}</h1>
      <p className="w-2/5 text-lg">{overview}</p>
      <div className="flex my-4">
        <button className="bg-black text-white py-2 px-8 rounded-md">
          Play
        </button>
        <button className="bg-black text-white ml-4 py-2 px-8 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
