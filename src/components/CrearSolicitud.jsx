import React from 'react'

export function CrearSolicitud() {
  return (
    <>
    <br></br>
    <br></br>
    
    <section className="bg-light">
            
            <div className="container px-3">
                <div className="row gx-4 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                    <div><img src="src/assets/img/portafolio.png" width="60%" height="60%" /></div>
                    </div>
                    < div className="col-sm-8 col-md-6">
                        <div>
                            <img src="src/assets/img/crearmerca.png" width="10%" height="10%" />
                            <button>Crear Solicitud </button>
                        </div>
                        <div>
                            <img src="src/assets/img/actmerca.png" width="10%" height="10%" />
                            <button>Actualizar Solicitud </button>
                        </div>
                        <div>
                            <img src="src/assets/img/listarpaq.png" width="10%" height="10%" />
                            <button>Listar Solicitud </button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section>
          <div class="container px-2">
            <h2 class="text-center text- font-alt mb-4">Solicita Tu Servicio Ahora!</h2>
            <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center"> </div>
          </div>
    </section>

</>

  )
}
