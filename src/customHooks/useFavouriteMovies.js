import { useDispatch } from "react-redux";
import { api_options } from "../Utils/Constants";
import { addFavouriteMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useFavouriteMovies = () => {
  const dispatch = useDispatch();
  const getNowFavMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", api_options)
    const json = await data.json();
    console.log(json.results);
    dispatch(addFavouriteMovies(json.results));
  };

  useEffect(() => {
    getNowFavMovies();
  }, []);
};

export default useFavouriteMovies;
