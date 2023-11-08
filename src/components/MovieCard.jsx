import React from "react";
import { img_cdn_url } from "../utils/constants";

export const MovieCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="">
      <img
        className="w-32 h-32 "
        alt="poster"
        src={img_cdn_url + data.poster_path}
      />
    </div>
  );
};
