import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    AddFav(state, action) {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    RemoveFav(state, action) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    },
  },
});

export const { AddFav, RemoveFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
