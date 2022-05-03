import ItemDetail from "../itemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./itemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
const ItemDetailContainer = ({setCart, cart}) =>{
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    useEffect (() =>{
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setLoading(false)
            setProduct(product)
        })

        return (() => {
            setProduct()
        })
    },[productId])
    if(loading){
        return(
            <div className = "cargando">Cargando, por favor espere...</div>
        )
    }
    return(
        <div>
            <div className="asd">
                <ItemDetail {...product} setCart={setCart} cart ={cart}/>
            </div>
        </div>
    )
}
export default ItemDetailContainer