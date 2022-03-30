import CartWidget from './CartWidget'
import './NavBar.css'
const NavBar = () => {
    return(
        <nav id = "navBar">
            <div id = "mainHeader">
                <CartWidget/>
                <div className = "tienda">Tienda la tiendita</div>
            </div>
            <div id = "ordenNavBar">
                <a href = "#navBar" className = "button buttonUno">Comprar</a>
                <a href = "#navBar" className = "button buttonDos">Vender</a>
                <a href = "#navBar" className = "button buttonTres ">Importar</a>
            </div>
        </nav>
    )
}
export default NavBar