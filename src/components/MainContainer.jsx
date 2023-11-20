import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Early Return
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="bg-black md:bg-gradient-to-r from-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround videoId={id} />
    </div>
  );
};

export default MainContainer;
