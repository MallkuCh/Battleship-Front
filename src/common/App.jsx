
import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { LogIn } from '../profile/LogIn'
import { Register } from '../profile/Register'
import Navbar from '../components/NavBar/Navbar'

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toogleForm = (formName) => {
    setCurrentForm(formName);
  }



  return (
    <>
    <Navbar />
    <div className="App">
      {
        currentForm === "login" ? <LogIn onFormSwitch={toogleForm}/> : <Register onFormSwitch={toogleForm}/>
      }
    </div>

    </>
  )
}

export default App;
