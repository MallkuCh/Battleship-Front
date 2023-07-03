import {useState} from "react"
import './AboutUs.css';
import img_mallku from "../../public/images/imagen_macul.jpg"
import img_juanca from "../../public/images/imagen_juanca.jpg"
import Navbar from "../components/NavBar/Navbar";

function AboutUs(){


    return(
        <>
        <Navbar />
            <div class="about-section">
            <h1>Sobre Nosotros</h1>
            <p>Te has preguntado quienes son los creadores tras este ambicioso proyecto?</p>
            <p>A continuación te los presentamos.</p>
            </div>

            <h2 >Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                    <img src={img_juanca} />
                    <div class="container">
                        <h2>Juan Carlos Gil</h2>
                        <p class="title">CEO & Co-Founder</p>
                        <p class="color-info">Estudiante de 4to año de ingenieria con major en Software.
                            En sus tiempos libres le gusta jugar con su perro y escuchar música.
                        </p>
                        <p class="color-info">jane@example.com</p>
                        <button class="button">Contact</button>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src={img_mallku}/>
                    <div class="container">
                        <h2>Mallku Chipana</h2>
                        <p class="title">Art Director & Co-Founder</p>
                        <p class="color-info">Estudiante de 4to año de ingenieria con major en Software.
                            Horiundo de Arica y con complejo de superioridad.</p>
                        <p class="color-info">mike@example.com</p>
                        <button class="button">Contact</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
