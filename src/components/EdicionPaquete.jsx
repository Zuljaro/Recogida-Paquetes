import { FormPaquete } from './FormPaquete'
import {userParams} from "react-router-dom"


const paqueteData = [{
    id: 1,
    Paquete: 'Documentos',
    Medida: '45X23',
    Fecha: '2022-05-24',
    ciudad: 'Bogota',
    DirEntrega: 'Cra 23 No 36-54'
},

{
    id: 2,
    Paquete: 'Mesa',
    Medida: '40X23',
    Fecha: '2022-06-20',
    ciudad: 'Bogota',
    DirEntrega: 'Cra 23 No 36-54'
},
{
    id: 3,
    Paquete: 'Silla',
    Medida: '20X40X60',
    Fecha: '1851',
    Ciudad: '2022-10-10',
    DirEntrega: 'Calle 13 No 16-34'

},
]

export function  EdicionPaquete ()  {
    const {id} = userParams()
    return (
        <>

            <h1>Esta es la edición del formulario del paquete # {id}</h1>
            <h2>Editar Orden</h2>
            <a class= "logo"><img src="src/assets/img/actmerca.png" alt="Registro Usuario" height= "80" width="80"/></a>
            {/*<FormPaquete/>*/}

          
        </>
    )
}
