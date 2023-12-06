import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from './GptMovieSuggestions'
import { bg_img } from './Utils/Constants'

const GptSearch = () => {
    return (
        <>
            <div className=' fixed -z-10 ' >
                <img
                    className='opacity-80 h-screen object-cover w-screen'
                    src={bg_img}
                    alt="bg-page"
                />
            </div>
            <div className=''>

                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch