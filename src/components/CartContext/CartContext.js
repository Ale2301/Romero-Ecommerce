import { createContext, useState } from "react";
const CartContext = createContext()
export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (productToAdd) =>{
        setCart([...cart,productToAdd])
    }
    const removeItem = (id) =>{
        const productos = cart.filter(prod => prod.id !== id)
        setCart(productos)
    }
    const getQuantity = () =>{
        let count = 0
        cart.forEach(prod =>{
            count = count += prod.quantity
        })
        return count
    }
    const isInCart = (id) =>{
       return cart.some(prod => prod.id === id)
    }
    const clearCart = () =>{
        setCart([])
    }
    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, getQuantity, isInCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext