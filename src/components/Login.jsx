import React from 'react'
import { useState } from 'react'

export function Login() {
      
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validacion, setValidacion] = useState('')

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

    const handleChangePassword = (e) => {
        const pass = e.target.value
        setPassword(pass)
    }    
    
  return (
<>
    <br></br>
    <section className="bg-light">
        
            <div className="container px-4">
            <br></br>
                <div className="row gx-4 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                    <br />
                    <br />
                    <h1 >Bienvenido a InstaYa</h1>
                    <br />
                    <form>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-user"
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese direccion de correo..."
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-user"
                                id="inputPassword"
                                placeholder="Contraseña"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </div>
                        <br />
                        <div id="emailHelp" className="form-text"></div>
                        <div className="form-group">

                        <div className="custom-control custom-checkbox small">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customCheck"
                                    >Recuerdame</label
                                >
                                <br></br>
                            </div>
                        </div>
                        <br></br>                   
                        <button
                            id="loginBtn"
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                        >
                        Login
                        </button>
                        <hr />
                        
                    </form>
                            
                    <div className="col-lg-12">
                        <div className="p-1">
                            {/* <!-- <div className="text-center">
                            <a className="small" href="forgot-password.html"
                            >Forgot Password?</a
                            >
                            </div> --> */}
                        <div className="p-1"  >
                            <a className="small" href="#" 
                            >No tengo una cuenta!</a>
                            <br />
                            <hr />
                        </div>
                    </div>
                    
                </div>
            </div>

                      <div className="col-sm-8 col-md-6">
                        <div><img src="src/assets/img/usuario.png" width="40%" height="40%" /></div>
                      </div>
                </div>

            </div>

    </section>

    
</>
)
}

