import React from "react"
import { Link } from "react-router-dom"
import {useState} from "react"
import Navbar from "../../components/NavBar/Navbar"
import Tables from "./Tables/Tables"

import "./description.css"

function DescriptionPage() {
    return (
        <>
            <Navbar />
            <div className="real_box">
            <div className="box_left">
                <div className="box">
                        <header>
                            <div className="down"> MAR DE FUEGO</div>
                            <div className="fantasy"> PROXIMAMENTE 2023 </div>
                        </header>
                        <div>
                            <div>
                                <p className="descripcion">En este juego, los jugadores controlan una flota de barcos y compiten por el control de diversas zonas estratégicas en el mapa.</p>
                                <p className="descripcion">Cada turno, los jugadores pueden mover sus barcos, disparar armas y realizar acciones especiales para intentar capturar zonas y derrotar a los barcos enemigos. Las zonas pueden otorgar diferentes cantidades de puntos dependiendo de su ubicación y su importancia estratégica en el mapa.</p>
                                <p className="descripcion">A medida que los jugadores acumulan puntos, pueden mejorar sus barcos ocrear nuevos barcos, para mejorar sus posibilidades de ganar la partida. También pueden utilizar tácticas astutas, como emboscadas y maniobras evasivas, para ganar ventaja sobre sus oponentes.</p>
                            </div>
                            <div>
                                <p> Developer: </p>
                                <p> JCxMC Games </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tables />
        </>
    )
}

export default DescriptionPage;
