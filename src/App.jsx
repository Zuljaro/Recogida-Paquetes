import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { NavBar2 } from './components/NavBar2'
import { Login } from './components/Login'
import { Register } from './components/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar/>
     <NavBar2/>
     <Login/>
     <Register/>
      
      
    </div>
  )
}

export default App
