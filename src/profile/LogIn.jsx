import React, {useState, useContext} from "react";
import Navbar from "../components/NavBar/Navbar";
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import './Login.css';


export const LogIn=(props)=>{

    const {token, setToken} = useContext(AuthContext)
    const [mail,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
        {
            "mail": mail,
            "password": pass,
        }).then( (response) => {
            console.log(response);
            setError(false);
            setMsg('Login exitoso');
            const acces_token = response.data.access_token;
            setToken(acces_token);
            console.log(acces_token);
        }).catch((error) => {
            console.log(error)
            setError(true);
        }
        )
        console.log(mail);
    }

    return(
        <>
            <section>
                <div>
                    <h1 id="titulo_LP">
                    Prepárate para la batalla! Consigue los puntos de territorio antes que nadie!
                    </h1>
                </div>
                <div className="auth-form-container">

                    {msg.length > 0 && <div className="succes"> {msg}  </div>}

                    {error && <div className="error"> Hubo un error con Login </div>}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email" id="letters_black">Email</label>
                        <input value={mail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

                        <label htmlFor="password" id="letters_black">Contraseña</label>
                        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                        <button type="submit">Iniciar Sesion</button>
                    </form>
                    <button className="link-btn" onClick={() => props.onFormSwitch('register') }>¿No tienes cuenta? Registrate aqui.</button>
                </div>
            </section>

        </>
    )
}
