import React, { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackGround = ({ videoId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const getMainVideoDeatils = async () => {
    const fetchData = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      API_Options
    );
    const jsonData = await fetchData.json();
    const filterData = jsonData.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMainVideoDeatils();
  }, []);

  if (trailer == null) return;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
