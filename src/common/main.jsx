import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AboutUs from '../profile/AboutUs'
import Routing from './Routing'
import AuthProvider from '../auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routing/>
    </AuthProvider>
  </React.StrictMode>
)
