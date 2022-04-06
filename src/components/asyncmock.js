const productos = [
    {id:"cero",name:"nombre del producto",price:"precio",category:"categoria",img:"",stockDisp:"Stock",description:"description"},
    {id:1,name:"producto 1",price:500,category:"pendiente",img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-Mac-Studio-Studio-Display-hero-220308_big.jpg.large.jpg",stockDisp:"34",description:"descripcion"},
    {id:2,name:"producto 2",price:800,category:"pendiente",img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.large.jpg",stockDisp:"21",description:"descripcion"},
    {id:3,name:"producto 3",price:1000,category:"pendiente",img:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-hero-3up-220308_big.jpg.large.jpg",stockDisp:"21",description:"descripcion"}
]
export const invocarProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}