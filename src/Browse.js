import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFavouriteMovies from "./customHooks/useFavouriteMovies";
import useUpComingMovies from "./customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies();
  useFavouriteMovies();
  useUpComingMovies();

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  return (
    <>
      <Header />
      {
        showGptSearch? (<GptSearch />):(<>
      <MainContainer />
      <SecondaryContainer />
        </>)
      }
    </>
  );
};

export default Browse;
