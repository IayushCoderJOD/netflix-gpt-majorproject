import React from "react";
import { img_cdn_url } from "./Utils/Constants";

const MovieCard = ({ name, popularity, release_date, poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="relative w-32 md:w-48 p-4 hover:p-[0px]  hover:w-32 md:hover:w-60 duration-300 cursor-pointer">
      <img
        className="rounded-md"
        alt="Card Image"
        src={img_cdn_url + poster_path}
      />
      <div className= "flex flex-col  absolute inset-0 pt-28 md:pt-56  opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full  flex flex-col justify-center items-center bg-gray-800 text-white opacity-80">
        <h1 className=" text-white font-bold  text-xs md:text-lg " > {name}</h1>
        <p className="font-medium  text-[9px] md:text-base ">{popularity} - rating</p>
        <p className="font-medium  text-[9px] md:text-base ">{release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
