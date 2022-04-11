import ItemDetail from "../itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { invocarProductosPorId } from "../asyncmock"
const ItemDetailContainer = () =>{
    const [id, setid] = useState([])
    useEffect (() =>{
        invocarProductosPorId(1).then(prod =>{
            setid(prod.id)
        }).catch(error =>{
            console.log("error")
        })
    },[])
    return(
        <div className = "asd">
            <ItemDetail id = {id}/>
        </div>
    )
}
export default ItemDetailContainer