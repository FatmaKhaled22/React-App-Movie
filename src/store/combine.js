import { combineReducers } from "@reduxjs/toolkit";
import  movieSlice  from "./reducer/movies";
import  tvSlice  from "./reducer/tv";
import peopleSlice  from './reducer/people';
import trendSlice from "./reducer/trending";
import favoriteSlice from './reducer/fav'


export default combineReducers({
    movies:movieSlice,
    tvshows:tvSlice,
    people:peopleSlice,
    trending:trendSlice,
    favorite:favoriteSlice
});