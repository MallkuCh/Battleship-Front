import Gameboard from "../components/Gameboard/GameBoard";
import Navbar from "../components/NavBar/Navbar";
import "./game.css"
import { useParams } from 'react-router-dom';


function Game() {

    const gameId = useParams()
    console.log(`imprimiendo el gameId: ${gameId}`)
    return (
        <>
            <Navbar/>
            <section>
                <div class = "titulo"> HORA DE LA BATALLA!</div>
                <div id="board">
                    <Gameboard/>
                </div>
                <div id='control-center'>
                    <div className="cuadro-control">foto</div>
                    <div className="cuadro-control resumen">
                        <div className="info"><p>puntaje: x monedas</p></div>
                        <div className="info"><p>poderes: ninguno</p></div>
                        <div className="info"><p>barcos en mar: x barcos</p></div>

                    </div>
                    <div className="cuadro-control acciones">
                        <button  id="atacar">atacar</button>
                        <button id="arriba">arriba</button>
                        <button id="derecha">derecha</button>
                        <button id="izquierda">izquierda</button>
                        <button id="abajo">abajo</button>
                        <button id="pasar">pasar</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Game;
