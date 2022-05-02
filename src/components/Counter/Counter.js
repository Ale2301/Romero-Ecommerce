import {useState,useEffect} from "react";
import "./Counter.css";
const Counter = ({stockDisp,initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    const [color, setColor] = useState("white")
    const [counterBack, setCounterBack] = useState("counter")
    let stockActual = ("Stock actual: " + stockDisp)
    useEffect(() => {
        console.log("El componente ya funciona")
    }, [])
    const restar = () =>{
        if (count <= 1){
            console.log("se intento restar uno pero fallo")
            setCounterBack("counter redCounter")
            setTimeout(() => {
                setCounterBack("counter")
            }, 550);
        }
        else{
            console.log("se resto uno")
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if (count >= stockDisp){
            console.log("se intento sumar uno pero fallo")
            setColor("red")
            setTimeout(() => {
                setColor("white")
            }, 800);
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
                <div className = {counterBack}>{count}</div>
                <button onClick={sumar}>+</button>
            </div>
            <div className="agregarCarrito">
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            <div className = {color}>
                <div className="stock">{stockActual}</div>
            </div>
        </div>
    )//COUNT = VARIABLE DEL CONTADOR
}
export default Counter