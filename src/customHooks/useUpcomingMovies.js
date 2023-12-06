import { useDispatch } from "react-redux";
import { api_options } from "../Utils/Constants";
import { addUpComingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      api_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useUpComingMovies;
