import './NavBar.css'
import CartContext from '../CartContext/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    let condicion = getQuantity()
    return(
        <div>
            {condicion !== 0 ?
                <Link to ="/cart">
                    <img id = "logo" src = {require('../../img/Carrito.ico')}  alt="carrito"/>
                    {getQuantity()}
                </Link>:
                <div></div>
            }
        </div>
    )
}
export default CartWidget