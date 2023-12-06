import React from "react";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" absolute w-screen aspect-video  pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black 

    " >
        <h1 className="font-bold text-2xl md:text-4xl" >{title}</h1>
        <p className="hidden lg:inline-block py-6 text-lg w-1/3" >{overview}</p>
        <div>
            <button className=" bg-white text-xl font-semibold text-black border border-black px-3 py-1 md:py-4  rounded-xl shadow-xl hover:bg-gray-300" > ▶️Play</button>
            <button className="hidden lg:inline-block ml-1 bg-gray-600 text-xl font-medium text-white p-4 rounded-xl shadow-xl border bg-opacity-50 border-black hover:bg-gray-900   ">More Info </button>
        </div>
    </div>
    )
};

export default VideoTitle;
