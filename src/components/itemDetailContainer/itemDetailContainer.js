import ItemDetail from "../itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { invocarProductosPorId } from "../asyncmock"
const ItemDetailContainer = () =>{
    const [id, product] = useState([])
    useEffect (() =>{
        invocarProductosPorId(1).then(prod =>{
            product(prod)
        }).catch(error =>{
            console.log("error")
        })
    },[])
    return(
        <div className = "asd">
            <ItemDetail {...id}/>
        </div>
    )
}
export default ItemDetailContainer