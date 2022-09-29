/* eslint-disable */
import React,{useState,useContext,createContext, useReducer} from "react"

export const cartContext = createContext();

//hook starts with use
export const useCart = () => useContext(cartContext)

const ACTIONS = {
    ADD_TO_CART : 'add-to-cart',
    INCREASE_TO_CART: 'increase-to-cart',
    REMOVE_FROM_CART : 'remove-from-cart',
    EMPTY_CART : 'empty-cart'
}

// const initialState = {

// }
const reducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART: {
            // const exists = 
            // return {...state,}
        }
        case ACTIONS.INCREASE_TO_CART: {
            return
        }
    
        default:
            break;
    }
}

const CartProvider = (props) => {
    const {children} = props
    // usecontext 
    // const shoppingCartInitialState = [];
    // const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);
    const shoppingCartInitialState = []
    const [shoppingCart,dispatch] = useReducer(reducer,shoppingCartInitialState)

    const addToCart = (productData) => {
        // Check if the product already exist in the shopping cart
        const productFound = shoppingCart.find((cartItem) => cartItem.id === productData.id);

        if (productFound) {
        // we want to return the exact same shopping cart.
        // Except that we want to update the quantity and total.
        const newShoppingCart = shoppingCart.map((cartItem) => {
            if (cartItem.id === productFound.id) {
            const newItemQuantity = cartItem.quantity + 1;
            return {
                ...cartItem,
                quantity: newItemQuantity,
                total: newItemQuantity * cartItem.price,
            };
            }

            return cartItem;
        });
        // setShoppingCart(newShoppingCart)
        dispatch({type:ACTIONS.INCREASE_TO_CART,});
        } else {
        // if we don't find the product, we want to add it to the shopping cart for the first time.
        const newCartItem = { ...productData, quantity: 1, total: productData.price };
        // setShoppingCart([...shoppingCart, newCartItem]);
        dispatch({type:ACTIONS.ADD_TO_CART,})
        }
    };

    const removeFromCart = (productId) => {
        // remove item from cart that match the product id.
        // we currently do not support lowering the quantity.
        // setShoppingCart(shoppingCart.filter((cartItem) => cartItem.id !== productId));
        dispatch({type:ACTIONS.REMOVE_FROM_CART})
    };

//   const emptyCart = () => setShoppingCart(shoppingCartInitialState);
    const emptyCart = () => dispatch({type:ACTIONS.EMPTY_CART})
    return (
        <cartContext.Provider value={{shoppingCart,addToCart,removeFromCart,emptyCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider