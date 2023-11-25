import React from "react";
import { img_cdn_url } from "../utils/constants";

export const MovieCard = ({ data }) => {
  // console.log(data);
  if (!data.poster_path) return null;
  return (
    <div className="object-cover">
      <img
        className="max-w-none w-[130px] lg:w-[150px] h-36 md:h-52 rounded-md hover:transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer mr-2 md:mr-4"
        alt="poster"
        src={img_cdn_url + data.poster_path}
      />
    </div>
  );
};
