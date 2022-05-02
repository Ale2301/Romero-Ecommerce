import "./itemDetail.css"
import Counter from "../Counter/Counter";
import {useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext";
const ItemDetail = ({name, price,id,img, description,stockDisp}) =>{
    const {isInCart} = useContext(CartContext)
    const {addItem} = useContext(CartContext)
    const {sumarItem} = useContext(CartContext)
    const {checkStock} = useContext(CartContext)
    const [toCart, setToCart] = useState (0)
    const stockActual = checkStock(stockDisp,id)
    const handleOnAdd = (count) =>{
        setToCart(count)
        if (isInCart(id)){
            console.log(true)
            sumarItem(count,id)
        }
        else{
            console.log("se agregaron " + count + " de productos")
            const objProd = {
                id, name, price, img
            }
            console.log (objProd)
            addItem({...objProd, quantity:count})
        }
    }
    return(
        <div className="displayGrid" id = {id}>
            <p><img className="imagenDetail" src = {img} alt={name}></img></p>
            <p className="itemDetail">Llevate este <span>{name}</span> por solo <span>{price}</span>!</p>
            <p className="description">Descripción breve de este artículo: {description}</p>
            {toCart>0 ? 
            <Link className = "irCarrito" to = "/cart">Compra agregada! Click para ir al carrito</Link> : 
            <Counter initial = {0} {...id} stockDisp={stockActual} onAdd={handleOnAdd}/>}
        </div>
    )
}
export default ItemDetail;