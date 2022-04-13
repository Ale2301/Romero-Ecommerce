import "./itemDetail.css"
const ItemDetail = ({name, price,id,img, description}) =>{
    return(
        <div className="displayGrid" id = {id}>
            <p><img className="imagenDetail" src = {img} alt={name}></img></p>
            <p className="itemDetail">Llevate este <span>{name}</span> por solo <span>{price}</span>!</p>
            <p className="description">Descripción breve de este artículo: {description}</p>
        </div>
    )
}
export default ItemDetail;