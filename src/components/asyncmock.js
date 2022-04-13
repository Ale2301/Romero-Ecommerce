const productos = [
    {id:1,name:"producto mac I",price:500,category:"mac",img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-Mac-Studio-Studio-Display-hero-220308_big.jpg.large.jpg",stockDisp:"34",description:"descripcion del producto 1"},
    {id:2,name:"producto Ipad I",price:800,category:"ipad",img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.large.jpg",stockDisp:"21",description:"descripcion del producto 1"},
    {id:3,name:"producto Ipad II",price:1000,category:"ipad",img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.large.jpg",stockDisp:"21",description:"descripcion del producto 2"},
    {id:4,name:"producto Ipad III",price:9000,category:"ipad",img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.large.jpg",stockDisp:"21",description:"descripcion del producto 3"},
    {id:5,name:"producto mac II",price:1400,category:"mac",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1636156358000",stockDisp:"12",description:"descripcion del producto 2"},
    {id:6,name:"producto mac III",price:1900,category:"mac",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726243000",stockDisp:"16",description:"descripcion del producto 3"},
    {id:7,name:"producto watch I",price:1100,category:"watch",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1645382414936",stockDisp:"12",description:"descripcion del producto 1"},
    {id:8,name:"producto watch II",price:1500,category:"watch",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1645382412806",stockDisp:"19",description:"descripcion del producto 2"},
]
const categories = [
    {id:"ipad",description:"ipad"},
    {id:"mac",description:"mac"},
    {id:"watch",description:"watch"}
]
export const getCategories = () =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categories)
        }, 1);
    })
}
export const invocarProductos = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? productos.filter(prod => prod.category === categoryId) : productos)
        }, 1);
    })
}
export const invocarProductosPorId = (id) =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === parseInt(id)))
            console.log(id)
        }, 1);
    })
}