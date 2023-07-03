import {useState} from "react"
import './AboutUs.css';
import usuario from '../assets/images/usuario.jpg';
import img_mallku from "../assets/images/imagen_macul.jpg"
import img_juanca from "../assets/images/imagen_juanca.jpg"
import img_chatgpt from "../assets/images/chatgp_imagen.png"
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

                <div class="column">
                    <div class="card">
                    <img src={img_chatgpt}/>
                    <div class="container">
                        <h2>Chatgpt</h2>
                        <p class="title">Lenguaje de Modelo</p>
                        <p class="color-info">Lenguaje de modelo que apoya al equipo en situaciones críticas y además da buen apoyo moral.</p>
                        <p class="color-info">john@example.com</p>
                        <button class="button">Incontactable</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
