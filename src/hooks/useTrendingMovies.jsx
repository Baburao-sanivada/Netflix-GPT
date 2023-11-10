import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const { trendingMovies } = useSelector((store) => store.movies);

  const NowPlayList = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const jsonData = await fetchData.json();
    // console.log(jsonData?.results);
    dispatch(addTrendingMovies(jsonData?.results));
  };

  useEffect(() => {
    !trendingMovies && NowPlayList();
  }, []);
};

export default useTrendingMovies;
