import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom"
import {firestoreDb} from "../../services/firebase"

const ItemListContainer = (props) =>{
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const collectionRef = categoryId
            ?query(collection(firestoreDb,'products'),where('category','==',categoryId))
            :collection(firestoreDb,"products")
        getDocs(collectionRef).then(response => { 
            console.log(response)
            const products = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setLoading(false)
            setProductos(products)
        })
    }, [categoryId])
    if(loading){
        return(
            <div className = "cargando">Cargando, por favor espere...</div>
        )
    }
    return(
        <div>
            <div id="tituloTienda">{props.greeting}</div>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer