import React from 'react'
import { useState } from 'react'

import { useNavigate} from "react-router-dom"


export  function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validacion, setValidacion] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (email.length===0 || password.length ===0){
        setValidacion('Algun campo esta vacio')
        return
    }
    alert(`Hemos obtenido los siguientes valores: \nemail: ${email} \npass: ${password}`)
    setEmail('')
    setPassword('')
}

const handleChangeEmail = (e)=>{
  const correo = e.target.value
  setEmail(correo)
}

const redireccionLogin = () =>{
  window.location.href="/login"
}

  return (
    <>
         <br></br>
         <br></br>
    
    <section className="bg-light">
        
            <div className="container px-4">
            
                
                    <div className="col-12 " >
                      <br />
                      <br />
                      <h2 >Bienvenido a InstaYa</h2>
                      <h4 >Crea tu Cuenta </h4>
                      <div><img src="src/assets/img/registrate.png" width="40%" height="40%" /></div>
                      <br />
                    </div>

                    <form className="user" onSubmit={handleSubmit} >
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Nombres"
                        />
                      </div>
                      <br></br>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Apellidos"
                        />
                      </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Correo electronico"
                        value={email}
                                onChange={handleChangeEmail}
                     />
                    </div>
                    <br></br>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                          value={password}
                        />
                      </div>
                      <br></br>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repite la contraseña"
                          value={password}
                        />
                      </div>
                    </div>
                    <br></br>
                    <button
                      className="btn btn-primary btn-user btn-block"
                      //onClick={redireccionLogin}
                  
                     onclick={()=>{navigate("/Login")}}
                    >
                      Registrar cuenta
                    </button>
                  </form>

                  <hr />
                  <div className="text-center">
                  <div className="text-center">
                    <a className="small" href="/Login">Tienes una cuenta? logueate!</a>
                 
                  </div>
                    
                    
                  </div>
        </div>

    </section>
    </>
  )
}
