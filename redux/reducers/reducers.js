import { createSlice } from "@reduxjs/toolkit";
import { api } from "../apiCall/actions";

export const root = createSlice({
     name: 'calculation',
     initialState: {
          members: null,
     },
     reducers: {
          setMembers: (state, action) => {
               state.members = action.payload;
          }

     }
});

export const { setMembers } = root.actions;
export default root.reducer;