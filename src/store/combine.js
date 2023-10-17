import { combineReducers } from "@reduxjs/toolkit";
import  movieSlice  from "./reducer/movies";
import  tvSlice  from "./reducer/tv";
import peopleSlice  from './reducer/people';


export default combineReducers({
    movies:movieSlice,
    tvshows:tvSlice,
    people:peopleSlice
});