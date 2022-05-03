import CartContext from "../CartContext/CartContext";
import { useContext, useState } from "react";
import "./Cart.css"
import { Link } from "react-router-dom";
import {writeBatch, collection, getDocs, query, where, documentId, addDoc} from "firebase/firestore"
import { firestoreDb } from "../../services/firebase";

const Cart = () =>{
    const {cart, removeItem, clearCart} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [mensaje, setMensaje] = useState("Click aqui para ir a elegir productos")
    const crearOrdenDeCompra = () =>{
        setLoading(true)
        const orden = {
            items: cart,
            comprador:{
                nombre: "yo",
                phone: 124234,
                email: "email@email"
            },
            total: precioFinal,
            date: new Date()
        }
        const idProductosComprar = cart.map(prod => prod.id)
        const actualizar = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb,"products")
        const sinStock = []
        getDocs(query(collectionRef,where(documentId(),"in",idProductosComprar))).then(response =>{
            response.docs.forEach(doc=>{
                const dataDoc = doc.data()
                const cantidadProducto = cart.find(prod => prod.id === doc.id)?.quantity
                if (dataDoc.stockDisp >= cantidadProducto){
                    actualizar.update(doc.ref,{stockDisp: dataDoc.stockDisp - cantidadProducto})
                }else{
                    sinStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(()=>{
            if (sinStock.length === 0){
                const collectionRef = collection(firestoreDb,"orders")
                return addDoc(collectionRef, orden)
            }
            else{
                return Promise.reject({name: "stockError", products: sinStock})
            }
        }).then(({id})=>{
            actualizar.commit()
            console.log("la id de la orden de compra es " + id)
        }).catch(error =>{
            clearCart()
            setMensaje("Hubo un error, intenta mas tarde :(")
        }).finally(()=>{
            setLoading(false)
            clearCart()
            setMensaje("Tu compra fue exitosa! Click para volver a ver productos")
        })
    }
    if(loading){
        return(
            <div className = "cargando">Cargando, por favor espere...</div>
        )
    }
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
                    <Link className = "clickCarritoVacio" to = "/">{mensaje}</Link>
                </div> : 
                <div className = "precioTotal">
                    Precio total a pagar por estos productos: <span>{precioFinal}</span>
                </div>}
            {precioFinal !== 0 ? 
                <div>
                    <div className = "buttonCart clear" onClick={clearCart}>
                        Click aqui para eliminar todos los items del carrito
                    </div>
                    <div className="buttonOrden" onClick={crearOrdenDeCompra}>crear orden de compra</div>
                </div>:
                <div></div>
            }
        </div>    
    )
}
export default Cart