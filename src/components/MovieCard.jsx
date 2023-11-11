import React from "react";
import { img_cdn_url } from "../utils/constants";

export const MovieCard = ({ data }) => {
  // console.log(data);
  if (!data.poster_path) return null;
  return (
    <div>
      <img
        className="min-w-[150px] h-44"
        alt="poster"
        src={img_cdn_url + data.poster_path}
      />
    </div>
  );
};
