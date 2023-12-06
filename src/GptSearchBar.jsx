import React, { useRef } from 'react'
import lang from './LanguageConstants'
import openai from "./Utils/OpenAi"
import { useDispatch, useSelector } from 'react-redux'
import { api_options } from './Utils/Constants'
import { addgptMovieResult } from './Utils/GptSlice'
const GptSearchBar = () => {
  const langChoosen=useSelector(store=>store.config.lang)
  const searchText=useRef(null);
  const dispatch=useDispatch();
  const searchMovieTmdb=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie +"&include_adult=false&language=en-US&page=1",
    api_options);
    const json=await data.json();
  
  return json.results;
  }

  const handleGptSearchClick=async ()=>
{
    // call the openAI api and get movie results!!
    console.log(searchText.current.value)
    const gptQuery="Act as a Movie Recommendation system and suggest some movies for query"+searchText.current.value+". Only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gya ";
    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery}],
      model: 'gpt-3.5-turbo',
      
  })
  console.log(gptResults.choices[0]?.message?.content)

  const gptMovies=gptResults.choices[0]?.message?.content.split(",")
  // for each movie I will search these movies in tmdb 
    const promiseArray=gptMovies.map(movie=>
    searchMovieTmdb(movie)   
    )
    const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults)
    dispatch(addgptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));

  }
  return (
    <div className='pt-[50%] md:pt-[15%] flex justify-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg  w-full md:w-1/2 bg-black  grid grid-cols-12' >
            <input type="text" ref={searchText} className='p-3 m-4 rounded-md col-span-9' placeholder={lang[langChoosen].getSearchPlaceholder}  />
            <button  className='m-4 rounded-lg col-span-3 py-2 px-4 bg-red-700 hover:bg-red-900 text-sm md:text-2xl  text-white'
            onClick={handleGptSearchClick} >{lang[langChoosen].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar