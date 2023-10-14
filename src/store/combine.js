import { combineReducers } from "@reduxjs/toolkit";
import  movieSlice  from "./reducer/movies";
import  tvSlice  from "./reducer/tv";


export default combineReducers({
    movies:movieSlice,
    tvshows:tvSlice
});