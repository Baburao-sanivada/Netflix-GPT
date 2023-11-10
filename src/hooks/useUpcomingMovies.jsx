import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import {
  addTrendingMovies,
  addtopratedMovies,
  addupcomingMovies,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const { upcomingMovies } = useSelector((store) => store.movies);
  const NowPlayList = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const jsonData = await fetchData.json();
    // console.log("upcoming  " + jsonData?.results);
    dispatch(addupcomingMovies(jsonData?.results));
  };

  useEffect(() => {
    !upcomingMovies && NowPlayList();
  }, []);
};

export default useUpcomingMovies;
