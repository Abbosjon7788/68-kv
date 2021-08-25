import { createSlice } from "@reduxjs/toolkit";
import { api } from "../apiCall/actions";

export const root = createSlice({
     name: 'calculation',
     initialState: {
          members: [],
     },
     reducers: {

     }
});

export const { } = root.actions;
export default root.reducer;