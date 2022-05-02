import { createContext, useState } from "react";
const CartContext = createContext()
export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (productToAdd) =>{
        setCart([...cart,productToAdd])
    }
    const sumarItem = (count,id) =>{
        const actualizar = {
            id : 0
        }
        const [producto] = cart.filter(prod => prod.id === id)
        console.log(producto)
        producto.quantity += count
        setCart(cart,actualizar)
        removeItem(0)
        console.log(cart)
    }
    const removeItem = (id) =>{
        console.log("Eliminando un item con la id:" + id)
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
    const checkStock = (stockFinal,id) =>{
        const [producto] = cart.filter(prod => prod.id === id)
        console.log(producto)
        if (producto === undefined){
            console.log(true)
            return stockFinal
        }
        else{
            console.log(false)
            let stock = stockFinal - producto.quantity
            console.log (stock)
            return stock
        }
    }
    const isInCart = (id) =>{
       return cart.some(prod => prod.id === id)
    }
    const clearCart = () =>{
        setCart([])
    }
    return(
        <CartContext.Provider value = {{cart, addItem, sumarItem, checkStock, removeItem, getQuantity, isInCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext