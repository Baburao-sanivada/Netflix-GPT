import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const NowPlayList = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const jsonData = await fetchData.json();
    // console.log(jsonData?.results);
    dispatch(addNowPlayingMovies(jsonData?.results));
  };

  useEffect(() => {
    !nowPlayingMovies && NowPlayList();
  }, []);
};

export default useNowPlayingMovies;
