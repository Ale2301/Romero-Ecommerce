import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { invocarProductos } from "../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) =>{
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        invocarProductos(categoryId).then(prods => {
            setProductos(prods)
        }).catch(error => {
            console.log("no funciono")
        })
    }, [categoryId],[productos])
    return(
        <div>
            <div id="tituloTienda">{props.greeting}</div>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer