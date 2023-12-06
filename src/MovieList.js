import React from "react";
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
import "./App.css"

const MovieList = ({ title, movies }) => {  
  return (
      <div className="px-6 p-3">
        <h1 className="font-semibold  text-lg md:text-3xl py-6 text-white" >{title}</h1>
        <div className="container flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie,i) => (
              <Link key={movie.id}   to={"/watch"}  >
              <MovieCard key={movie.id}  name={movie.title} popularity={movie.popularity} release_date={movie.release_date}  poster_path={movie.poster_path} />
            </Link> 
            ))}
          </div>
        </div>
      </div>
    )
};

export default MovieList;
