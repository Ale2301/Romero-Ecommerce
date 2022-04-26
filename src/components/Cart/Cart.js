import CartContext from "../CartContext/CartContext";
import { useContext } from "react";
import "./Cart.css"
import { Link } from "react-router-dom";

const Cart = () =>{
    const {cart} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    const {clearCart} = useContext(CartContext)
    let precioFinal = 0;
    cart.forEach(prod => {
        precioFinal += prod.price * prod.quantity
        console.log(precioFinal)
    });
    
    return(
        <div>
            <div id = "titleCarrito">Carrito de compras</div>
            {cart.map (prod => 
                <div key={prod.id} id={prod.id} className = "grillaCarrito">
                    <div>
                        <span>
                            Producto: 
                        </span>
                    {prod.name}
                    </div>
                    <div>
                        <span>
                            Precio por unidad: 
                        </span>
                    {prod.price}
                    </div>
                    <div>
                        <span>
                            Cantidad elegida a comprar: 
                        </span> 
                    {prod.quantity}
                    </div> 
                    <div>
                        <span>
                            Precio a pagar por estos productos: 
                        </span> 
                    {prod.price * prod.quantity}
                    </div>
                    <img src = {prod.img} alt = {prod.name}></img>
                    {prod.quantity === 1?
                        <div className = "buttonCart" onClick={ e => removeItem(prod.id)}>
                            Click para eliminar tu {prod.name}
                        </div>:
                        <div className = "buttonCart" onClick={ e => removeItem(prod.id)}>
                            Click para eliminar tus {prod.name}
                        </div>
                    }
                </div>
            )}
            {precioFinal === 0 ? 
                <div className = "carritoVacio">
                    <div>¡Aun no hay items en el carrito!</div>
                    <Link className = "clickCarritoVacio" to = "/">Click aqui para ir a elegir productos</Link>
                </div> : 
                <div className = "precioTotal">
                    Precio total a pagar por estos productos: <span>{precioFinal}</span>
                </div>}
            {precioFinal !== 0 ? 
                <div className = "buttonCart clear" onClick={clearCart}>
                    Click aqui para eliminar todos los items del carrito
                </div>:
                <div></div>
            } 
        </div>    
    )
}
export default Cart