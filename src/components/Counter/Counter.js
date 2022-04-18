import {useState,useEffect} from "react";
import "./Counter.css";
const Counter = ({stockDisp,initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    useEffect(() => {
        console.log("El componente ya funciona")
    }, [])
    const restar = () =>{
        if (count <= 1){
            console.log("se intento restar uno pero fallo")
        }
        else{
            console.log("se resto uno")
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if (count >= stockDisp){
            console.log("se intento sumar uno pero fallo")
        }
        else{
            console.log("se sumo uno")
            setCount(count + 1)
        }
    }
    return(
        <div>
            <div id = "contenedorCounter">
                <button onClick={restar}>-</button>
                <div className = "counter">{count}</div>
                <button onClick={sumar}>+</button>
            </div>
            <div className="agregarCarrito">
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )//COUNT = VARIABLE DEL CONTADOR
}
export default Counter