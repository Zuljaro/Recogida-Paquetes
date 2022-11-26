import { useState } from 'react'
import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { CrearSolicitud } from './components/CrearSolicitud'
import { ListarSolicitud } from './components/ListarSolicitud'
//import EdicionPaquete from './components/EdicionPaquete'
//import {Book } from './components/book';
//import {EdicionPaquete } from './components/EdicionPaquete';
//import {NuevoPaquete} from './components/NuevoPaquete'
//import {BookNew} from './components/book-new';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
          
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/CrearSolicitud" element={<CrearSolicitud />} />
      <Route path="/ListarSolicitud" element={<ListarSolicitud/>}/>
     
      
      
  
    </Routes>
    </BrowserRouter>
           
      
    </div>
  )
}

export default App
