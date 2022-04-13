import "./item.css"
import { Link } from "react-router-dom";
const Item = ({id,name,img,price}) =>{
    return(
        <li id = {id} className = "flexItems">
            <div className = "imagenItems">
                <img className = {id} src={img} alt={name}/>
            </div>
            <p className = "acomodoItemDos">{name}</p>
            <p className = "acomodoItem">Precio: {price}</p>
            <Link className={id} to={`detail/${id}`}>Ver Detalle</Link>
        </li>
    )
}
export default Item;