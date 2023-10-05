import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../services/movieServices";

const initailMovies = await getMovies();

export const movieSlice = createSlice({
  name: 'movies',
  initialState: initailMovies,
  reducers: {
    setMovies: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;