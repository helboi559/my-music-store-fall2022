/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingCart:[],
    totalQuantity:0,
    total:0
}

const cartSlice = createSlice({
    name:"shoppingCart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const itemIndex = state.shoppingCart.findIndex((cartItem) => cartItem.id === action.payload.id)
            console.log(itemIndex)
            if (itemIndex >= 0) {
                state.shoppingCart[itemIndex].quantity += 1

            }else {
                const tempProd = {...action.payload, quantity:1};
                state.shoppingCart.push(tempProd)
            }
            
        },
        removeFromCart:(state,action) => {
            // let res = state.shoppingCart.filter((cartItem) => cartItem.id !== action.payload.id)
            // console.log(state.shoppingCart)
            
           let res = state.shoppingCart.filter((cartItem) => cartItem.id !== action.payload.id)
            // return {...action.payload , res}
            console.log(res)
            // console.log(current(state))
            state.shoppingCart = res
            // const newState = {...state,}
        },
        emptyCart:(state,action) => {
            // const empty = []
            // console.log(empty)
            state.shoppingCart = []
        }
        
    }
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;