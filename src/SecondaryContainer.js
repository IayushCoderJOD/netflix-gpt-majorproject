import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className=" mt-0 md:-mt-40 pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.nowFavouriteMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowUpcomingMovies} />
         
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
