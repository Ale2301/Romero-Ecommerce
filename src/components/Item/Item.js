import "./item.css"
const Item = ({id,name,img,price}) =>{
    return(
        <div id = {id} className = "flexItems">
            <div className = "imagenItems">
                <img className = {id} src={img} alt={name}/>
            </div>
            <p className = "acomodoItemDos">{name}</p>
            <p className = "acomodoItem">{price}</p>
            <button className={id}>Boton magico para ver detalles que no funciona pero en algun momento funcionara</button>
        </div>
    )
}
export default Item;