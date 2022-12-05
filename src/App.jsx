import { useState } from 'react'
import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { ListarSolicitud } from './components/ListarSolicitud'
import {NuevoPaquete} from './components/NuevoPaquete'
//import {PaqueteHome } from './components/PaqueteHome'
import { FormPaquete }  from './components/FormPaquete'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

     
          
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/NuevoPaquete" element={<NuevoPaquete />} />
      <Route path="/ListarSolicitud" element={<ListarSolicitud/>}/>
      <Route path="/FormPaquete" element={<FormPaquete/>}/>
      
      
      
      
  
    </Routes>
    </BrowserRouter>
           
      
    </div>
  )
}

export default App
