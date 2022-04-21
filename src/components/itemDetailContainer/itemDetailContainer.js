import ItemDetail from "../itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { invocarProductosPorId } from "../asyncmock"
import { useParams } from "react-router-dom"
import "./itemDetailContainer.css"
const ItemDetailContainer = ({setCart, cart}) =>{
    const [id, product] = useState([])
    const {productId} = useParams()
    useEffect (() =>{
        invocarProductosPorId(productId).then(prod =>{
            product(prod)
        }).catch(error =>{
            console.log("error")
        })
    },[productId])
    return(
        <div>
            <div className="asd">
                <ItemDetail {...id} setCart={setCart} cart ={cart}/>
            </div>
        </div>
    )
}
export default ItemDetailContainer