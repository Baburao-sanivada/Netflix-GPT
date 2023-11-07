import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useVideoTrailer = (videoId) => {
  const dispatch = useDispatch();

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
};
export default useVideoTrailer;
