/* eslint-disable */
import { configureStore,createSlice } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
import {reducer} from "./userSlice";
import shoppingCartReducer from "./cartSlice"
//redux toolkit new way of redux

//create a store
const store = configureStore({
    reducer:{
        user: reducer,
        shoppingCarts:shoppingCartReducer,
    }
})






export default store