/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    //redux does not accept undefined value
    initialState:null,
    reducers : {
        signIn: (state,action) => action.payload,
        signOut: (state,action) => null,

    }

})

//action creators (fuctions to call)
export const {signIn,signOut} = userSlice.actions


export const {reducer} = userSlice