import { createSlice } from "@reduxjs/toolkit";
import { getMoviesNow, getMoviesPop, getMoviesTop, getMoviesUpcom } from "../../services/movieServices";

const initailMoviesPop = await getMoviesPop();
const initailMoviesUpcom = await getMoviesUpcom();
const initailMoviesTop = await getMoviesTop();
const initailMoviesNow = await getMoviesNow();

const initialState = {
  popular : initailMoviesPop,
  upcoming : initailMoviesUpcom,
  toprated : initailMoviesTop,
  nowplaying : []
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      return state = action.payload;
    },
    setMoviesNow: (state, action) => {
      state.nowplaying = action.payload;
    }
  }
})

export const { setMovies ,setMoviesNow } = movieSlice.actions;

export default movieSlice.reducer;