const ItemDetail = ({id, category, stockDisp, description}) =>{
    console.log({id} + {category} + {stockDisp})
    toString({category})
    console.log({category})
    return(
        <div id = {id}>
            <div>{id}</div>
            <div>{category}</div>
            <div>{stockDisp}</div>
            <div>{description}</div>
        </div>
    )
}
export default ItemDetail;