import { createSlice } from "@reduxjs/toolkit";
import { getTvAir, getTvPop, getTvToday, getTvTop } from "../../services/tv-show-list";

const initailTvPop = await getTvPop();
const initailTvAir = await getTvAir();
const initailTvTop = await getTvTop();
const initailTvToday = await getTvToday();

const initialState = {
  popular : initailTvPop,
  toprated : initailTvTop,
  today : initailTvToday,
  onAir : []
}

export const tvSlice = createSlice({
  name: 'tvshows',
  initialState: initialState,
  reducers: {
    setTvShows: (state, action) => {
      return state = action.payload;
    },
    setTvShowsonAir: (state, action) => {
      state.onAir = action.payload;
    }
  }
})

export const { setTvShows , setTvShowsonAir } = tvSlice.actions;

export default tvSlice.reducer;