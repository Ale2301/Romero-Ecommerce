import { createContext, useState } from "react";
const CartContext = createContext()
export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [logueado, setLogueado] = useState(false)
    const [datos, setDatos] = useState({})
    console.log(logueado + "del setearLogin")
    console.log(cart)
    const setearLogin = (data) =>{
        setLogueado(true)
        setDatos(data)
        console.log(datos)
    }
    const chequearLogin = () =>{
        if (logueado){
            return true
        }
        else{
            return false
        }
    }
    const chequearDatos = () =>{
        return datos
    }
    const addItem = (productToAdd) =>{
        setCart([...cart,productToAdd])
    }
    const sumarItem = (count,id) =>{
        const actualizar = {id : 0}
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
            return stockFinal
        }
        else{
            let stockActual = stockFinal - producto.quantity
            return stockActual
        }
    }
    const isInCart = (id) =>{
       return cart.some(prod => prod.id === id)
    }
    const clearCart = () =>{
        setCart([])
    }
    return(
        <CartContext.Provider value = {{cart, setearLogin, chequearDatos,chequearLogin, addItem, sumarItem, checkStock, removeItem, getQuantity, isInCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext