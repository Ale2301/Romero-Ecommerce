import { useState } from 'react'
import { firestoreDb } from "../../services/firebase";
import {collection, doc, getDoc, setDoc} from "firebase/firestore"
import { Link } from 'react-router-dom';
import "./Register.css"


const RegisterAccount = () =>{
    const [isRegistred,setRegister] = useState(false)
    const [loading, setLoading] = useState(false)
    const [mensaje, setMensaje] = useState("Registrar una nueva cuenta")
    const collectionRef = collection(firestoreDb,"users")
    const handleOnSubmit = (event) =>{
        setLoading(true)
        event.preventDefault()
        let {name,password,mail,phone } = document.forms[1]
        getDoc(doc(collectionRef, name.value)).then(response => {
            if (response.exists(doc)){
                setMensaje("Ese nombre de usuario ya esta en uso, elige otro")
            }
            else{
                const usuario = {
                    username: name.value,
                    password: password.value,
                    mail:mail.value,
                    phone:phone.value
                }
                setRegister(true)
                setDoc(doc(collectionRef,name.value),usuario)
            }
            setLoading(false)
        })
        console.log(loading)
    }
    console.log(loading)
    if(loading){
        return(
            <div className = "cargando">Cargando, por favor espere...</div>
        )
    }
    return(
        <div id = "registerContainer">
            {isRegistred?
                <div className = "registrado">
                    <div>Registrado exitosamente!</div>
                    <Link className = "aProductos" to = "/">Volver a elegir productos</Link>
                </div>:
                <form className = "formRegister" onSubmit={handleOnSubmit}>
                    <div className = "tituloRegister">{mensaje}</div>
                    <label>Nombre de usuario:</label>
                    <input type ="text" name="name" required />
                    <label>Contraseña</label>
                    <input type = "password" name = "password" required/>
                    <label>Email</label>
                    <input type = "email" name = "mail" required/>
                    <label>Número de teléfono</label>
                    <input type = "number" name = "phone" required/>
                    <div>
                        <input type = "submit"/>
                    </div>
                </form>
            }
        </div>
    )
}
export default RegisterAccount