import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { NavBar2 } from './components/NavBar2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar/>
     <NavBar2/>
      
      <h1>Recogida de Paquetes</h1>
    </div>
  )
}

export default App
