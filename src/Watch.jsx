import React from 'react'
import { netflix_logo } from './Utils/Constants'
import useMovieTrailerForBg from './customHooks/useMovieTrailerForBg';
import { useSelector } from 'react-redux';
const Watch = ({movieId}) => {
//   const trailerId=useSelector(store=>store.movies?.trailerVideo)
  const movies = useSelector((store) => store.movies);

  useMovieTrailerForBg(movieId);
    return (
        <>
            <div className="flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black flex-col absolute w-full z-10 
    md:flex-row" >
                <a href='/browser'>
                    <img
                        alt="netflix-logo"
                        className="w-44 mx-auto md:mx-0 "
                        src={netflix_logo}
                    />
                </a>
            </div>
            <div>
                
            </div>
        </>

    )
}

export default Watch