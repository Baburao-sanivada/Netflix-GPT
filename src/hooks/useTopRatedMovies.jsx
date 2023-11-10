import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrendingMovies, addtopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const { topratedMovies } = useSelector((store) => store.movies);

  const NowPlayList = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_Options
    );
    const jsonData = await fetchData.json();
    // console.log(jsonData?.results);
    dispatch(addtopratedMovies(jsonData?.results));
  };

  useEffect(() => {
    !topratedMovies && NowPlayList();
  }, []);
};

export default useTopRatedMovies;
