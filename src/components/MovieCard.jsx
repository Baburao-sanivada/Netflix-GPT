import React from "react";
import { img_cdn_url } from "../utils/constants";

export const MovieCard = ({ data }) => {
  // console.log(data);
  if (!data.poster_path) return null;
  return (
    <div className=" relative block transition-transform focus:scale-150 hover:scale-150 focus:z-10 hover:z-10 hover:-translate-y-6">
      <img
        className="block max-w-full w-[130px] lg:w-[160px] h-52 hover:h-80  rounded-md mr-4  "
        alt="poster"
        src={img_cdn_url + data.poster_path}
      />
    </div>
  );
};
