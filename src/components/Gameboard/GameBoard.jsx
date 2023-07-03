import react, { useContext, useEffect, useState} from 'react'
import img_barco_transparente from "../../assets/images/barco_transparente.png"
import img_barco_transparente_blanco from "../../assets/images/barco_transparente_blanco.png"
import img_barco_transparente_amarillo from "../../assets/images/barco_transparente_amarillo.png"
import img_moneda from "../../assets/images/oro_transparente.png"
import axios from 'axios'
import './GameBoard.css'
import { AuthContext } from '../../auth/AuthContext';

// definimos los valores de los ejes para definir el tamaño del tablero y asignar a cada
// cuadro un id según su coordenada.
const verticalAxis = ["1","2","3","4","5","6","7","8"]
const horizontalAxis = ["1","2","3","4","5","6","7","8"]

function Gameboard(props) {
    let [idlogueado, setIdlogueado] = useState("")
    let [usernamelogueado, setUsernamelogueado] = useState("")

    const { gameId } = props;
    console.log("Id de la partida es:")
    console.log(gameId)


    console.log(`imprimiendo el gameID en el tablero: ${gameId}`)

    const board = []
    let [barcos, SetBarcos] = useState([]);
    let [monedas, setMonedas] = useState([])
    let [turno, setTurno] = useState("");
    const [accion, setAccion] = useState("");
    let [jugadores, setJugadores] = useState("");
    let [jugadorActual, setJugadorActual] = useState("")
    let [enemigos, setEnemigos] = useState([{name:"cargando"}, {name:"cargando"}])
    let [mensaje, setMensaje] = useState("")
    let [cargando, setCargando] = useState(true)
    let [status, setStatus] = useState("")

    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
          setContador((prevContador) => prevContador + 1);
        }, 30000); // 10000 milisegundos = 10 segundos
    
        // Se ejecuta al desmontar el componente o al cambiar de estado
        return () => clearInterval(intervalo);
      }, []);

    

    const { token } = useContext(AuthContext)
    
    
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/check/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setIdlogueado(response.data.user.sub)
        setUsernamelogueado(response.data.user.username)
      })
      .catch(error => {
        setStatus(error.message);
      });

    console.log(`id jugador logueado: ${idlogueado}`)
    console.log(`username jugador logueado: ${usernamelogueado}`)
    //log("antes de useffect")
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/status/${gameId}`)
            .then((response) => {

                console.log("STATUS DEL JUEGO ACTUAL")
                console.log(response.data)
                if (response.data.numJugadores===3){
                    setCargando(false)
                }
                //.log('imprimiendo status..')
                //.log(response.data)
                setJugadores(response.data.jugadores)
                //.log("imprimiendo lista de jugadores...")
                //.log(jugadores)
                const turno = response.data.turno

                // const jugador_actual = response.data.jugadores[`jugador_${turno}`]
                setJugadorActual(response.data.jugadores[`jugador_${turno}`])
                //.log('imprimiendo jugador actual')
                //.log(response.data.jugadores[`jugador_${turno}`])
                const lista_enemigos = []
                if (turno===1){
                    lista_enemigos.push(response.data.jugadores["jugador_2"])
                    lista_enemigos.push(response.data.jugadores["jugador_3"])
                    setEnemigos(lista_enemigos)
                } else if(turno ===2){
                    lista_enemigos.push(response.data.jugadores["jugador_1"])
                    lista_enemigos.push(response.data.jugadores["jugador_3"])
                    setEnemigos(lista_enemigos)
                } else if(turno ===3){
                    lista_enemigos.push(response.data.jugadores["jugador_1"])
                    lista_enemigos.push(response.data.jugadores["jugador_2"])
                    setEnemigos(lista_enemigos)
                }

                const datos_barcos = response.data.barcos
                const datos_monedas = response.data.monedas
                //.log(datos_barcos)
                const lista_barcos = []
                for (const propiedad in datos_barcos) {
                    if (propiedad.includes("barcos_jugador_")) {
                        lista_barcos.push(...datos_barcos[propiedad])
                    }
                }
                //.log("monedassssssss")
                //.log(datos_monedas)
                console.log("imprimiendo lista de barcos...")
                console.log(lista_barcos)
                setMonedas(datos_monedas)
                SetBarcos(lista_barcos)
                setTurno(turno)

                // const barcos = {};
                // data.barcos.map((barcos_jugador) => {

                // })
            }).catch((error) => {
                console.log(error);
            })
    }, [turno, contador]);
    //.log("despues de useffect")
    //.log("Aqui debería imprimirse la lista de barcos:P")
    //.log(barcos)
    //.log("Aqui debería imprimirse la lista de monedas:P")
    //.log(monedas)
    //.log("Aqui debería imprimirse el turno:")
    //.log(turno)


    for (let j = 0; j< verticalAxis.length; j++) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            let barco = false
            let moneda = false


            for (let objeto of barcos){
                let imagen_barco=""
                let lugar_jugador = ""


                if (jugadores!=""){

                    for (const jugador in jugadores){
                        const jugador_numero = parseInt(jugador.split("_")[1]);
                        if (jugadores[jugador].id === objeto.player_Id){
                            lugar_jugador = jugador_numero;
                            break;
                        }
                    }
                }

                if (lugar_jugador===1){
                    imagen_barco = img_barco_transparente
                } else if(lugar_jugador===2){
                    imagen_barco = img_barco_transparente_blanco
                } else if(lugar_jugador ===3) {
                    imagen_barco = img_barco_transparente_amarillo
                }


                if (objeto.pos_x === j && objeto.pos_y === i){
                    board.push(
                        <div className='cuadro-barco'  ><img id= {objeto.id} onClick={() => {

                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                console.log(`es turno de ${turno}`)
                            if (accion==="arriba" | accion==="abajo" | accion==="izquierda" | accion==="derecha") {
                                const data = {
                                    "barco_id": objeto.id,
                                    "jugador_id": jugadorActual.id,
                                    "game_Id": parseInt(gameId),
                                    "movimiento": accion
                                }
                                //.log("imprimiendose el json a mandar...")
                                //.log(data)
                                axios.post(`${import.meta.env.VITE_BACKEND_URL}/ships/movement/execute`, data).then(response => {
                                        //.log('RESPONSE')
                                        //.log(response)
                                        //.log(response.body)
                                        const data_2 = {
                                            "juego_id": gameId
                                        }
                                        axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/turn`, data_2)
                                            .then(response => {
                                                console.log("se cambio de turno!!!")
                                                console.log(response)
                                            }).catch(error => {
                                                //.log("mala vola")
                                                console.log(error)
                                            })

                                        setTurno(turno+1)
                                    }).catch(error => {
                                        console.log("HA HABIDO UN ERROR MADRE MIA")
                                        setMensaje("vamos, solo puedes mover tus barcos, intentalo nuevamente")
                                        console.log(error)
                                    })

                            }else if(accion==="atacar"){
                                //.log(`jugador ${turno} atacandooooooo`)

                                const data_ataque = {
                                    "barco_atacado_id": objeto.id,
                                    "game_Id": parseInt(gameId),
                                    "jugador_id_atacado": objeto.player_Id,
                                    "jugador_id_atacante": turno,
                                    "energia_atacante": jugadorActual.energia
                                }

                                //.log("imprimiendose el json a mandar...")
                                //.log(data_ataque)

                                axios.post(`${import.meta.env.VITE_BACKEND_URL}/players/atack`, data_ataque)
                                    .then(response => {
                                        if (response.data.estado=== "movimiento exitoso"){
                                            const data_2 = {
                                                "juego_id": gameId
                                            }
                                            //.log(response.data.estado);
                                            axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/turn`, data_2)
                                            .then(response => {
                                                console.log("se cambio de turno!!!")
                                                console.log(response)
                                            }).catch(error => {
                                                console.log("mala vola")
                                                console.log(error)
                                            })

                                            setTurno(turno+1)
                                        } else{
                                            console.log(response.data.estado)
                                        }
                                    }).catch(error => {console.log(error)})


                            }else {
                                console.log("no hay accion seleccionada ")
                            }

                            }else{
                                console.log("no es tu turno!!! (intentó mover sin ser su turno)")
                            }
                            //.log("apretaste el barco bro bro")
                            
                        }}src={imagen_barco} /></div>
                    )
                    barco = true
                    break
                }
            }

            for (let objeto of monedas){
                if (objeto.pos_x === j && objeto.pos_y === i){
                    board.push(
                        <div className='cuadro-moneda'  ><img id='moneda'  src={img_moneda} /></div>
                    )
                    barco = true
                    break
                }
            }

            if (barco === false && moneda===false){
                board.push(
                    <div className='cuadro'>[{horizontalAxis[i]},{verticalAxis[j]}]</div>
                );

            }

        }
    }

    if (cargando===true){
        return(
            <>
            <h1>ESPERANDO MÁS JUGADORES...</h1>
            <h2>PIENSA EN TU MEJOR ESTRATEGIA</h2>
            </>
        )
    } else if(cargando===false){
        return (
            <>

            <section className='contenedor'>

                <div className='board-enemies'>
                    <div id="gameboard">
                        {board}
                    </div>

                    <div className='enemigos'>
                        <div className="titulo-enemigo">
                            <h3>Enemigos!!</h3>
                        </div>
                        <div className='enemigo'>
                            <p>{enemigos[0].name}</p>
                            <p>puntaje: {enemigos[0].puntaje}</p>
                            <p>energia: {enemigos[0].energia}</p>
                        </div>
                        <div className="separacion"></div>
                        <div className='enemigo'>
                            <p>{enemigos[1].name}</p>
                            <p>puntaje:{enemigos[1].puntaje}</p>
                            <p>energia: {enemigos[1].energia}</p>
                        </div>
                    </div>
                </div>

                <div className="control-center">
                    <div className="cuadro-control"><br></br>turno de: <br></br><br></br>{jugadorActual.name}</div>

                    <div className=" resumen">
                        <div className='info'><p>{mensaje}</p></div>
                        <div className="info"><p>puntaje: {jugadorActual.puntaje}</p></div>
                        <div className="info"><p>poderes: ninguno</p></div>
                        <div className="info"><p>barcos: ninguno</p></div>
                        <div className="info"><p>energia: {jugadorActual.energia}</p></div>
                    </div>

                    <div className='acciones'>
                        <button  id="atacar" onClick={()=>{

                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                if (jugadorActual.energia >=3){
                                    setAccion("atacar")
                                    console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                                }else{
                                    setMensaje("No tienes energía suficiente!")
                                }
                            }else{
                                console.log("no es tu turno (1)!!!")
                            }
                            }}>atacar</button>
                        <button id="arriba" onClick={()=>{
                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                setAccion("arriba")
                                setMensaje("elige tu barco a mover")
                                console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                            }else{
                                console.log(`el id del usuario que debe jugar es: ${jugadorActual.user_Id}`)
                                console.log("no es tu turno(2)!!!")
                            }
                            
                        }}>arriba</button>
                        <button id="derecha" onClick={()=>{
                            
                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                setMensaje("elige tu barco a mover")
                                setAccion("derecha")
                                console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                            }else{
                                console.log("no es tu turno(3)!!")
                            }

                            
                        }}>derecha</button>
                        <button id="izquierda" onClick={()=>{
                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                setMensaje("elige tu barco a mover")
                                setAccion("izquierda")
                                console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                            }else{
                                console.log("no es tu turno(4)!!!")
                            }
                            
                        }}>izquierda</button>
                        <button id="abajo" onClick={()=>{

                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                setMensaje("elige tu barco a mover")
                                setAccion("abajo")
                                console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                            }else{
                                console.log("no es tu turno(5)!")
                            }

                            
                        }
                        }>abajo</button>
                        <button id="pasar" onClick={()=>{

                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                setAccion("pasar")
                            console.log(`situación actual\njugador en turno: ${turno}\nacción en turno: ${accion}`)
                            const data_pass = {
                                jugador_Id: jugadorActual.id,
                                juego_Id: gameId
                            }
                            //.log('imprimiendo json para pasar turno...')
                            //.log(data_pass)
                            axios.post(`${import.meta.env.VITE_BACKEND_URL}/players/pass`, data_pass)
                                .then(response=> {

                                    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/turn`, {juego_id: gameId})
                                        .then(response => {
                                            console.log(response.data.estado)
                                            setTurno(turno + 1)

                                        }).catch(error =>
                                            console.log(error))
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            }else{
                                console.log("no es tu turno(6)!!!")
                            }

                            
                        }}>pasar</button>
                        <button id="crearBarco" onClick={()=>{
                            if (parseInt(jugadorActual.user_Id) === parseInt(idlogueado)){
                                console.log('crear barco');
                            const data_boat = {
                                jugador_Id :  jugadorActual.id,
                                game_Id_create : parseInt(gameId),
                                turno: turno,
                            };
                            console.log("MARCA: CREANDO BARCO ANTES DEL AXIOS")
                            console.log(data_boat)
                            
                            axios.post(`${import.meta.env.VITE_BACKEND_URL}/ships/createship`, data_boat).then(
                                response => {
                                    console.log("IMPRIMIENDO BARCO, SE SUPOEN")
                                    console.log(response)
                                    console.log('TEST MENSAJE');
                                    console.log(response.data.estado);
                                    setMensaje(response.data.estado);
                                    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/turn`, {juego_id: gameId})
                                        .then(response => {
                                            console.log(response.data.estado)
                                            setTurno(turno + 1);
                                        }).catch(error =>
                                            console.log(error))
                                })
                                .catch(error => {
                                setMensaje(error.response.data);
                                console.log(error.response.data);
                            })

                            }else{
                                console.log("no es tu turno!!(7)")
                            }

                            
                        }}>crear barco</button>
                    </div>
                </div>

            </section>

            </>
        )
    }

}

export default Gameboard;

