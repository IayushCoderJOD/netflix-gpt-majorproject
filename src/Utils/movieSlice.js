import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        nowFavouriteMovies:null,
        nowUpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addFavouriteMovies:(state,action)=>{
            state.nowFavouriteMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.nowUpcomingMovies=action.payload;
        },
    }
})

export const { addNowPlayingMovies, addTrailerVideo,addFavouriteMovies,addUpComingMovies } = movieSlice.actions;
export default movieSlice.reducer;