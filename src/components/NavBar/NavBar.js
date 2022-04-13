import CartWidget from './CartWidget'
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getCategories } from '../asyncmock'
const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect (()=>{
        getCategories().then(categories =>{
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
                {categories.map(cat => <NavLink className = "button" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
        </nav>
    )
}
export default NavBar