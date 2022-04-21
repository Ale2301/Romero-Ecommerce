import "./itemDetail.css"
import Counter from "../Counter/Counter";
import {useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext";
const ItemDetail = ({name, price,id,img, description,stockDisp}) =>{
    const {isInCart} = useContext(CartContext)
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (count) =>{
        console.log("se agregaron " + count + " de productos")
        const objProd = {
            id, name, price, img
        }
        console.log (objProd)
        addItem({...objProd, quantity:count})
    }
    return(
        <div className="displayGrid" id = {id}>
            <p><img className="imagenDetail" src = {img} alt={name}></img></p>
            <p className="itemDetail">Llevate este <span>{name}</span> por solo <span>{price}</span>!</p>
            <p className="description">Descripción breve de este artículo: {description}</p>
            {isInCart(id) ? <Link className = "irCarrito" to = "/cart">Compra agregada! Click para ir al carrito</Link> : <Counter initial = {1} {...id} stockDisp={stockDisp} onAdd={handleOnAdd}/>}
            <div className="stock">Stock actual = {stockDisp}</div>
        </div>
    )
}
export default ItemDetail;