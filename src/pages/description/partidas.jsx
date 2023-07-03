import react, { useContext, useEffect, useState} from 'react'
import Navbar from "../../components/NavBar/Navbar";
import axios from 'axios';
import "./partidas.css";
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router';



export default function Partidas() {
    const navigate = useNavigate();

    let [partidas, setPartidas] = useState();
    let [tiempo, setTiempo] = useState();
    let [buscar, setBuscar] = useState(1)
    let [id, setId] = useState("")
    let [username, setUsername] = useState("")
    let [status, setStatus] = useState("")

    const { token } = useContext(AuthContext)
    
    
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/check/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setId(response.data.user.sub)
        setUsername(response.data.user.username)
      })
      .catch(error => {
        setStatus(error.message);
      });

      
    const handleClick = (id) => {
        console.log('Id del boton', id)

    }
    

    useEffect(()=>{
        console.log("renderizando...")
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/disponibles`)
        .then(response => {
            setPartidas(response.data)
        })
    }, [buscar]);

    console.log(`id jugador logueado: ${id}`)
    console.log(`username jugador logueado: ${username}`)
    return(
        <>
        <Navbar/>
        <div>
          <p className='titulo_LP'>Unete a la batalla!</p>
        </div>
        <div className="botones">
          <div className='recargar'>
                <button onClick={()=>{
                    console.log("boton de buscar apretado")
                    setBuscar(buscar+1)

                  }}>Recargar</button>
          </div>

          <div className="crear">
                  <button onClick={()=>{
                    console.log('creando partida...')
                    const json_data = {
                      "user_Id": id,
                      "username": username
                    }

                    console.log("json a mandar...")
                    console.log(json_data)
                    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/create`, json_data)
                        .then(response =>{
                          console.log(response.data.estado)
                          setBuscar(buscar+1)
                        })
                        .catch(error =>{
                          console.log(error)
                        })
                  }}>Crear Partida</button>
          </div>
        </div>
          
        <div className="container">
            <div  className="titulos">
              <div className="identificador-titulo">
                <div className='container-titulo'>Identificador</div>
              </div>
              <div className="jugadores-titulo">
                <div className='container-titulo'>Cant. jugadores</div>
              </div>
              <div className="enter-titulo">
                <div className='container-titulo'>Entrar</div>
              </div>
            </div>

        {partidas?.length > 0 ? (
          partidas.map((partida) => (
            <div  className="partida-disponible">
              <div className="identificador">{partida.id}</div>
              <div className="jugadores">{partida.numPlayers}/3</div>
              <div id = {partida.id} onClick={()=>{
                const data_json = {
                  user_Id:parseInt(id),
                  username:username,
                  juego_id: partida.id
                }
                console.log("json a mandar para entrar a partida..")
                console.log(data_json)
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/games/unirse`, data_json)
                    .then(response => {

                      const accion = response.data.accion
                      console.log(`la accion fue: ${accion}`)

                      if (accion === "entrar"){
                        const partida_id = partida.id.toString();
                        console.log("ya estas en la partida, te estamos adentrando en ella...")
                        navigate(`/Game/${partida_id}`);
                      } else if(accion ==="unirse"){
                        const partida_id = partida.id.toString();
                        console.log("da lo mejor de tí!")
                        navigate(`/Game/${partida_id}`);
                      }

                    

                      // const partida_id = partida.id.toString();
                      // console.log(`imprimiendo el id de la partida: ${partida_id}`)
                      // console.log('te has logrado unir o entrar! revisemos')
                      // console.log(response.data)
                      // navigate(`/Game/${partida_id}`);

                    })
                    .catch(error=>{
                      console.log('ocurrió un error al unirse a la aprtida')
                      console.log(error)
                    })
              }} className="enter"><button>entrar</button></div>
            </div>
          ))
        ) : (
          <div>Cargando partidas...</div>
        )}

        </div>



        </>
    )
}
