import { Link } from "react-router-dom"

const paquetes = [
    {
        id: 1,
        Paquete: 'Documentos',
        Medida: '45X23',
        Fecha: '2022-05-24',
        ciudad: 'Bogota',
        DirEntrega: 'Cra 23 No 36-54'
    },
    {
        id: 2,
        Paquete: 'Caja Decorativa',
        Medida: '150X70',
        Fecha: '2022-10-12',
        ciudad:'Barranca',
        DirEntrega: 'Calle 33 No 11-54'
    },
    {
        id: 3,
        Paquete: 'Mesa de Noche',
        Medida: '80X30X25',
        Fecha: '2022-06-10',
        ciudad: 'Villavicencio',
        DirEntrega: 'Transv 33 No 11-54'
    }]

const labels = [
    "# Seguimiento",
    "Paquete",
    "Medida",
    "Fecha de Envio",
    "Ciudad",
    "Dir Entrega",
    "Action"
]
export  function ListarSolicitud() {
  return (

    
    <>
            <div className="books-home">
                <Link className="btn btn-primary books-home__create" to='/CrearSolicitud'>Create</Link>
                <table className="table">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {paquetes.map((paquete, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">
                                        <Link to={'/components/' + paquete.id}>{paquete.id}</Link>
                                    </th>
                                    <td>{paquete.Paquete}</td>
                                    <td>{paquete.Medida}</td>
                                    <td>{paquete.Fecha}</td>
                                    <td>{paquete.ciudad}</td>
                                    <td>{paquete.DirEntrega}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/EdicionPaquete/' + paquete.id + '/edit'}>Edit</Link>
                                        <Link className="btn btn-danger" to={'/books/' + paquete.id + '/delete'}>Delete</Link>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    
    
  )
}
