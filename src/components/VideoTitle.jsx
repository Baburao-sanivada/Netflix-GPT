import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[18%] pl-24 absolute text-white">
      <h1 className="font-bold text-4xl my-4">{title}</h1>
      <p className="w-2/5 text-md">{overview}</p>
      <div className="flex my-4">
        <button className="bg-white text-black pr-8 pl-6 rounded-md flex items-center">
          <BsFillPlayFill className="text-4xl mx-1" />
          <span className="font-semibold text-lg">Play</span>
        </button>
        <button className="bg-gray-700  ml-4 py-2 px-8 rounded-md flex items-center">
          <AiOutlineInfoCircle className="text-2xl mx-1 text-white" />{" "}
          <span className="font-bold mx-1">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
