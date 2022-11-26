import { FormPaquete } from "./FormPaquete"
import {userParams} from "react-router-dom"


const paqueteData = {
    id: 1,
    Paquete: 'Documentos',
    Medida: '45X23',
    Fecha: '2022-05-24',
    ciudad: 'Bogota',
    DirEntrega: 'Cra 23 No 36-54'

}

const  EdicionPaquete = () => {
    const {id} = userParams()
    return (
        <>

            <h1>Esta es la edición del formulario del paquete # {id}</h1>
            <FormPaquete data={paqueteData} /> 
          
        </>
    )
}

export default EdicionPaquete