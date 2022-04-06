import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { invocarProductos } from "../asyncmock"

const ItemListContainer = (props) =>{
    const [productos, setProductos] = useState([])
    useEffect(() => {
        invocarProductos().then(prods => {
            setProductos(prods)
        }).catch(error => {
            console.log("no funciono")
        })
    }, [])
    return(
        <div>
            <div id="tituloTienda">{props.greeting}</div>
           <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer