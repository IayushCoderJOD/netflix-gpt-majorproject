import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";
import ConfigSlice from "./ConfigSlice";

const AppStore=configureStore({
    reducer:{
        user: userSlice,
        movies:movieSlice,
        gpt: GptSlice,
        config:ConfigSlice,
    }

})


export default AppStore;