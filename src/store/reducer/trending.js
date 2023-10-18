import { createSlice } from "@reduxjs/toolkit";
import { getTrendMovie, getTrendTv } from "../../services/trending";

const initailTrendTv = await getTrendTv();
const initailTrendMovie = await getTrendMovie();

const initialState = {
  trend_tv : initailTrendTv,
  trend_movie : initailTrendMovie
}

export const trendSlice = createSlice({
  name: 'trending',
  initialState: initialState,
  reducers: {
    setTrend: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setTrend } = trendSlice.actions;

export default trendSlice.reducer;