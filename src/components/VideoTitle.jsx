import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[36%] lg:pt-[18%] pl-8 md:pl-20 absolute text-white">
      <h1 className="font-bold text-lg md:text-2xl lg:text-4xl my-2 md:my-4">
        {title}
      </h1>
      <p className="w-2/5 text-md hidden lg:block">{overview}</p>
      <div className="flex my-2 md:my-4 ">
        <button className="bg-white text-black pl-3 pr-4 md:pr-8 md:pl-6 rounded-md flex items-center hover:bg-gray-200">
          <BsFillPlayFill className="text-lg md:text-4xl md:mx-1" />
          <span className="font-semibold text-sm md:text-lg">Play</span>
        </button>
        <button className="bg-gray-700 ml-2 md:ml-4 py-1 md:py-2 md:px-8 px-3 rounded-md flex items-center hover:bg-gray-600">
          <AiOutlineInfoCircle className="text-lg md:text-2xl md:mx-1 text-white" />{" "}
          <span className="font-normal md:font-bold mx-1 text-sm md:text-base">
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
