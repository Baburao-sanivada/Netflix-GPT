import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackGround = ({ videoId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useVideoTrailer(videoId);
  if (trailer == null) return;
  return (
    <div className="">
      <iframe
        className="w-full aspect-video pl-6 md:pl-10 md:pt-0"
        src={`https://www.youtube.com/embed/${trailer.key}/?&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=${trailer.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
