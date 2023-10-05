import { combineReducers } from "@reduxjs/toolkit";
import  movieSlice  from "./reducer/movies";


export default combineReducers({
    movies:movieSlice,
});