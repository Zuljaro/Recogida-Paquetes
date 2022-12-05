import { FormPaquete } from "./FormPaquete"
import React from 'react'

export function NuevoPaquete ()  {
    return (
        <>
            <h2>Registrar Orden</h2>
            <a class= "logo"><img src="src/assets/img/paquete.png" alt="Registro Usuario" height= "80" width="80"/></a>
            <FormPaquete/>
           
        </>
    )
}

