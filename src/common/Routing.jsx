import { BrowserRouter, Routes, Route } from "react-router-dom"
import Instructions from "../game/instructions"

import App from "./App"
import { Register } from "../profile/Register"
import { LogIn } from "../profile/LogIn"
import  AboutUs  from "../profile/AboutUs"
import Rules from "../game/Rules"
import Partidas from "../pages/description/partidas"

import Check from '../protected/usercheck'

import DescriptionPage from "../pages/description/description"
import Gameboard from "../components/Gameboard/GameBoard"
import GameWar from "../game/gameWar"

function Routing(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/Instructions'} element={<Instructions/>}/>
                <Route path={'/Register'} element={<Register/>}/>
                <Route path={'/LogIn'} element={<LogIn/>}/>
                <Route path={'/AboutUs'} element={<AboutUs/>}/>
                <Route path={'/Rules'} element={<Rules/>}/>
                <Route path={'/check'} element={<Check/>} />

                <Route path={'/'} element={<App/>}/>

                <Route path={'/Description'} element={<DescriptionPage/>}/>

                <Route path={'/Game/:gameId'} element = {<GameWar/>}/>

                <Route path={'/Partidas'} element = {<Partidas/>}/>

            </Routes>
        </BrowserRouter>

        </>
    )
}

export default Routing;
