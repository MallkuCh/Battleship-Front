

import Gameboard from "../components/Gameboard/GameBoard";
import Navbar from "../components/NavBar/Navbar";
import "./game.css"
import { useParams } from 'react-router-dom';


function Game() {
    const { gameId } = useParams()
    console.log(`imprimiendo el gameId`)
    console.log(gameId)
    return (
        <>  
            <Navbar/>
            <Gameboard gameId={gameId}/>
            
           
        </>
    )
}

export default Game;