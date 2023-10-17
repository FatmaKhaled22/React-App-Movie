import { createSlice } from "@reduxjs/toolkit";
import { getPeople } from './../../services/people';


const initialState = await getPeople();

export const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    setPeople: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;