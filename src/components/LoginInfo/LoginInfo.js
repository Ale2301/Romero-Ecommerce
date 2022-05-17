import { useContext, useState } from "react"
import { doc, getDoc} from "firebase/firestore"
import { firestoreDb } from "../../services/firebase";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/CartContext";
import "./LoginInfo.css"
const LoginInfo = () =>{
    const {setearLogin} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(0)
    const [name, setName] = useState()
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        setLoading(true)
        let {uname, pass} = document.forms[0]
        getDoc(doc(firestoreDb, 'users', uname.value)).then(response => {
            if (response.exists(doc)){
                let dataDoc = response.data()
                if(dataDoc.password !== pass.value){
                    setError("redPassword")
                    setTimeout(() => {
                        setError(0)
                    }, 1900);
                 }else{
                     setName(uname.value)
                     setLogin(true)
                     setearLogin(dataDoc)
                 }
            }
            else{
                setError("redLogin")
                setTimeout(() => {
                    setError(0)
                }, 1900);
            }
            setLoading(false)    
        })
    }
    if (loading){
        return <div className = "cargandoNavbar">Cargando...</div>
    }
    return(
        <div id = "loginContainer">
            {login?
                <div className = "logueado">Logueado: <span>{name}</span></div>:
                <form onSubmit={handleOnSubmit}>
                    <div id = "login">
                        <label className = {error}>Nombre de usuario</label>
                        <input className = {"input login"+error} type ="text" name="uname" required/>
                    </div>
                    <div id = "password">
                        <label className = {error}>Contraseña</label>
                        <input className = {"input password"+error} type = "password" name = "pass" required/>
                    </div>
                    <input className="submit" type = "submit"/>
                    <div>
                    {error !== 0?
                        <div className = "errorDatos">Los datos no coinciden: {error === "redLogin"?"El usuario no existe":error==="redPassword"?"La contraseña es inválida":""}</div>:
                        <Link to = "/register" style={{color:"red"}}>¿No tienes una cuenta? Click para registrarte</Link>
                    }
                    </div>
                </form>
            }
        </div>
    )
}
export default LoginInfo
