import ItemDetail from "../itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { invocarProductosPorId } from "../asyncmock"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"
import "./itemDetailContainer.css"
const ItemDetailContainer = () =>{
    const [id, product] = useState([])
    const {productId} = useParams()
    useEffect (() =>{
        invocarProductosPorId(productId).then(prod =>{
            product(prod)
        }).catch(error =>{
            console.log("error")
        })
    },[productId])
    const handleOnAdd = (cantidad) =>{
        console.log("se agregaron " + cantidad + " de productos")
    }
    return(
        <div>
            <div className="asd">
                <ItemDetail {...id}/>
            </div>
            <Counter initial = {1} {...id} onAdd={handleOnAdd}/>
        </div>
    )
}
export default ItemDetailContainer