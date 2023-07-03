import React, { useContext, useState} from 'react';
import './Login.css';
import { AuthContext } from '../auth/AuthContext';

const Logout = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const handleLogout = () => {
        logout();
        setMsg("Has salido con exito");
    }

    return (
        <>
            <button onClick={handleLogout} className='logout_button'>Cerrar Sesion</button>
        </>
    )
}

export default Logout;
