import { createSlice } from "@reduxjs/toolkit";
import { getPeople } from './../../services/people';


const initialPeople = await getPeople();
const initialState = {
  initialPeople:initialPeople,
  people:[],
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },
  }
})

export const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;