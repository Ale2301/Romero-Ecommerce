import './NavBar.css'
import CartContext from '../CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    return(
        <div>
            <Link to ="/cart">
                <img id = "logo" src = {require('../../img/Carrito.ico')}  alt="carrito"/>
                {getQuantity()}
            </Link>
        </div>
    )
}
export default CartWidget