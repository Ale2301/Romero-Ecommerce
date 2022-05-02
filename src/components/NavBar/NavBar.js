import CartWidget from './CartWidget'
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'
const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect (()=>{
        getDocs(collection(firestoreDb,"categories")).then(response => {
            const categories = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    },[])
    return(
        <nav id = "navBar">
            <div id = "mainHeader">
                <CartWidget/>
                <Link to="/" className="tienda">Tienda la tiendita</Link>
            </div>
            <div id = "ordenNavBar">
                {categories.map(cat => <NavLink className = "button" key={cat.id} to={`/category/${cat.id}`}>{cat.descripcion}</NavLink>)}
            </div>
        </nav>
    )
}
export default NavBar