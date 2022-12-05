import React from 'react'
//import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { useNavigate} from "react-router-dom"



export function FormPaquete() {
  const [isEdit, setIsEdit] = useState(false)
  const [password, setPassword] = useState('')
  const [validacion, setValidacion] = useState('')
  const navigate = [useNavigate]



     return (
        <>
        
        <section className="bg-light">
            < div className="container px-4">
                <form className="user">
                    <br></br>

            
                <div className="col-sm-20 mb-6 mb-sm-0">
                    <div className="form-group-row" display="flex">
                
                     
                            <div class="col-sm-4 mb-6 mb-sm-10">
                                <input type="date" required="required" name="Date" placeholder="Fecha"/>
                                <i></i>
                            </div>
                            <div class="col-sm-12 mb-6 mb-sm-10">
                                <input type="time" required="required" name="Date" placeholder="Hora"/>
                                <i></i>
                            </div>
                       
                    </div>
                </div>
                
                <br></br>
                
                
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="form-group-row">
                        <div className="col-sm-6 mb-3 mb-sm-10">
                            <input type="number" required="required" name="Largo" placeholder="Largo(cm)" min="0" max="200"/>
                            
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="number" required="required" name="Ancho" placeholder="Ancho(cm)" min="0" max="200"/>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="number" required="required" name="Alto" placeholder="Alto(cm)" min="0" max="200"/>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="number" required="required" name="Peso" placeholder="Peso(Kg)" min="0" max="100"/>
                        </div>
                    </div>
                </div>
                 



                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="direccionrecogida" placeholder="Dirección Recogida"/>
                      </div>
                      <br></br>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="ciudadrecogida" placeholder="Ciudad Recogida"/>
                      </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="nombredestinatario" placeholder="Nombre Destinatario"/>
                      </div>
                      <br></br>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="ccdestinatario" placeholder="CC/NIT Destinatario"/>
                      </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="direccionentrega" placeholder="Dirección Entrega"/>
                      </div>
                      <br></br>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" required="required" name="ciudadentrega" placeholder="Ciudad Entrega"/>
                      </div>
                    </div>
                    <br></br>





                    <div>
                        <button type="submit" class="boton" 
                          onclick={()=>{navigate("/ListarSolicitud")}}
                        >Crear orden</button>
                    </div>
                </form>
            </div>

    

        </section>
        </>
    )
}

