
const FormPaquete= ({data})=>  {
   const crearPaquete = ()=>{
       console.log('Creando Paquete')
       console.log(data)
    }
    const actualizarPaquete = ()=>{
        console.log('Actualizando Paquete')
        console.log(data)
    }

    return (
        <>
<h1>Este es el formulario</h1>
{data.length  != 0 ? actualizarPaquete() : crearPaquete()}

<form ></form>




            
           </>
    )
}

export default FormPaquete

