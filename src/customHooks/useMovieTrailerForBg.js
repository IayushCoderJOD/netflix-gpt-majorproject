import {addTrailerVideo} from '../Utils/movieSlice'
import  { useEffect } from 'react'
import { api_options } from '../Utils/Constants'
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailerForBg = (movieId) => {
  const dispatch=useDispatch();
  const trailerVideo=useSelector(store=>store.movies.trailerVideo)
  const getMovieVideo=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"
    + 
    movieId
    +
    "/videos?language=en-US1", api_options)

    const json=await data.json();
    // console.log(json)
    const filterData=json.results.filter(video=>video.type==="Trailer");
    const trailer=filterData.length===0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{

    !trailerVideo && getMovieVideo();
  },[])

}

export default useMovieTrailerForBg