import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] pl-10 absolute text-white">
      <h1 className="font-bold text-2xl my-4">{title}</h1>
      <p className="w-2/5 text-lg">{overview}</p>
      <div className="flex my-4">
        <button className="bg-white text-black py-2 px-8 rounded-md">
          Play
        </button>
        <button className="bg-white text-black ml-4 py-2 px-8 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
