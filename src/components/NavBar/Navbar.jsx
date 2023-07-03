import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../../profile/Logout';

function Navbar () {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li className='navbar-element'>
                        <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Home
                        </NavLink>
                    </li>
                    <li className='navbar-element'>
                        <NavLink to="/AboutUs" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Sobre nosotros
                        </NavLink>
                    </li>
                    <li className='navbar-element'>
                        <NavLink to="/Rules" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Reglas
                        </NavLink>
                    </li>
                    <li className='navbar-element'>
                        <NavLink to="/Description" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Descripcion
                        </NavLink>
                    </li>
                    <li className='navbar-element'>
                        <NavLink to="/Partidas" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Buscar Partida
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Logout />
                </div>
            </nav>
        </header>
    )
}
export default Navbar;
