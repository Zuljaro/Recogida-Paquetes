import { Link} from "react-router-dom"
//import { useNavigate} from "react-router-dom"


const paquetes = [
    {
        id: 1,
        Fecha: '2022-10-12',
        CiuOrigen: 'Pereira',
        CiuDestino: 'Bogota',
        Estado: 'Completado',
        
    },
    {
        id: 2,
        Fecha: '2022-05-10',
        CiuOrigen: 'Amazonas',
        CiuDestino: 'Caqueta',
        Estado: 'Guardado',
    },
    {
        id: 3,
        Fecha: '2022-06-18',
        CiuOrigen: 'Medellin',
        CiuDestino: 'Tunja',
        Estado: 'Cancelado',
    }]

const labels = [
    "# Seguimiento",
    "Fecha de Solicitud",
    "Ciudad Origen",
    "Ciudad Destino",
    "Estado",
    "Action"
]
export  function ListarSolicitud() {
  return (

    
    <>
            <h2>Seguimiento de Envio</h2>
            <a class= "logo"><img src="src/assets/img/listarpaq.png" alt="Registro Usuario" height= "80" width="80"/></a>
            
                <h5>Ingrese en este campo el numero de su solicitud</h5>
                <input type="text" placeholder="Rastrear solicitud..." />
                <button className="btn btn-primary ms-3">Buscar</button>
            



            <div className="books-home">
                
                <Link className="btn btn-primary books-home__create" to='/NuevoPaquete'>Create</Link>
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
                                        <Link to={'/components/Paquete' + paquete.id}>{paquete.id}</Link>
                                    </th>
                                    <td>{paquete.Fecha}</td>
                                    <td>{paquete.CiuOrigen}</td>
                                    <td>{paquete.CiuDestino}</td>
                                    <td>{paquete.Estado}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/EdicionPaquete/' + paquete.id }>Edit</Link>
                                      
                                        
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    
    
  )
}
