import React, {useState} from "react";
import axios from 'axios';

export const Register=(props)=>{
    const [mail,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,
        {
            "username": name,
            "mail": mail,
            "password": pass,
        }).then( (response) => {
            console.log('Registro exitoso!');
            setError(false);
            setMsg('Registro exitoso! Ahora puedes volver y logearte!');
        }).catch((error) => {
            console.error('Ocurrio un error', error);
            setError(true);
        })
        console.log(mail);
    }
    return(
        <>
            <section>
            <div className="Contenedor_Titulo">
                <h1 id="titulo_LP">
                Prepárate para la batalla! Consigue los puntos de territorio antes que nadie!
                </h1>
            </div>
            <div className="auth-form-container">

                {msg.length > 0 && <div className="succes"> {msg}  </div>}

                {error && <div className="error"> Hubo un error al registrarse </div>}

                <form className="register-form" onSubmit={handleSubmit}>

                    <label htmlFor="name" id="letters_black">Nombre</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="string" placeholder="Username" id="name" name="email"/>

                    <label htmlFor="email" id="letters_black">Email</label>
                    <input value={mail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email"/>

                    <label htmlFor="password" id="letters_black">Contraseña, debe tener al menos una letra y un numero</label>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                    <button type="submit">Iniciar sesion</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes cuenta? inicia sesión.</button>
            </div>
            </section>
        </>
    )
}
