import './NavBar.css'
const CartWidget = () =>{
    return(
        <div>
            <img id = "logo" src = {require('../../img/Carrito.ico')}  alt="carrito"/>
            <p className="logoAcompaña">4</p>
        </div>
        /*logoAcompaña va a ser el futuro contador :)*/
    )
}
export default CartWidget