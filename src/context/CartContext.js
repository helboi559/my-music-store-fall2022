/* eslint-disable */
import React,{useState,useContext,createContext} from "react"

export const cartContext = createContext();

//hook starts with use
export const useCart = () => useContext(cartContext)

const CartProvider = (props) => {
    const {children} = props
    const shoppingCartInitialState = [];

    const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

    // console.log('shopping cart state: ', shoppingCart);

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

        setShoppingCart(newShoppingCart);
        } else {
        // if we don't find the product, we want to add it to the shopping cart for the first time.
        const newCartItem = { ...productData, quantity: 1, total: productData.price };
        setShoppingCart([...shoppingCart, newCartItem]);
        }
    };

    const removeFromCart = (productId) => {
        // remove item from cart that match the product id.
        // we currently do not support lowering the quantity.
        setShoppingCart(shoppingCart.filter((cartItem) => cartItem.id !== productId));
    };

  const emptyCart = () => setShoppingCart(shoppingCartInitialState);
    return (
        <cartContext.Provider value={{shoppingCart,addToCart,removeFromCart,emptyCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider