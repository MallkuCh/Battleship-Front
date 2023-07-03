import React, { useState, useEffect } from 'react';
import "./Rules.css";
import Navbar from '../components/NavBar/Navbar';

function Rules() {
  const rulesList = [
    "Solo se podrá avanzar una casilla del mar por turno",
    "SI consigues 10 puntos de territorio, felicidades! ganaste.",
    "En el juego cada jugador tendrá una cantidad de dinero que se utiliza principalmente para poder comprar barcos.",
    "El jugador podrá tener más dinero capturando casillas de dinero las cuales generan un income después de cada ronda de turnos.",
    "Los jugadores podrán crear barcos extra por dinero en el menú de acciones",
    "los barcos se podrán mover una predeterminada cantidad de casillas alrededor suyo y solo podrán hacerlo una vez por turno."
  ];

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const handle_click = () =>{
    setVisible(true)
    setVisible2(false)
  }

  const handle_click2 = () =>{
    setVisible(false)
    setVisible2(true)
  }

  const handle_click3 = () =>{
    setVisible(true)
    setVisible2(true)
  }




  const [ruleIndex, setRuleIndex] = useState(Math.floor(Math.random() * rulesList.length));

  useEffect(() => {
    const timer = setTimeout(() => {
      setRuleIndex((ruleIndex + 1) % rulesList.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [ruleIndex, rulesList.length]);

  return (
    <>
    <Navbar />
    <div className='titulo-container'>
        <h1 id='titulo_reglas'>EN EL ARTE DE LA REGLA EXISTE EL HORNOR, POR ESO RECUERDA LO SIGUIENTE EN CAMPO DE BATALLA</h1>
    </div>
      <div className='botones-reglas'>
      <button onClick={handle_click}>Reglas de Batalla</button>
      <button onClick={handle_click3}>Ambos tipos</button>
      <button onClick={handle_click2}>Reglas de movimiento</button>

    </div>
    <div id='rules'>
      <div className={visible ? "rules-container" : "rules-container hidden"}>
        <h2 className="rules-title">Reglas de batalla:</h2>
        <p className="rules-text">{rulesList[Math.floor(Math.random() * rulesList.length)]}</p>
      </div>
      <div className={visible2 ? "rules-container" : "rules-container hidden"}>
        <h2 className="rules-title">Reglas de movimiento:</h2>
        <p className="rules-text">{rulesList[Math.floor(Math.random() * rulesList.length)]}</p>
      </div>
    </div>
    </>
  );
}

export default Rules;
