import React from 'react'

export function Home() {
  return (
<>    
<br></br>
<br></br>
    
    <section className="bg-light">
            
            <div className="container px-3">
                <div className="row gx-4 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                        <h1 >Bienvenido a InstaYa</h1>
                        <p>En InstaYa te ofrecemos el servicio de recogida de paquetes sin costo. Solo debes ingresar todos los datos requeridos como nombres, correo electrónico, teléfonos, el tipo de envío ya sea paquetes o documentos, la dirección, la fecha y la hora para llevar a cabo la recogida. Adicional debes ingresar el nombre y documento de la persona que hará la entrega de la mercancía que será recogida por nuestro personal.</p>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div><img src="src/assets/img/imgrecogida.png" width="60%" height="60%" /></div>
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

    <footer class="bg-black text-center py-2">
            <div class="container px-5">
                <div class="text-white-50 small">
                    <div class="mb-2">InstaYa. Empresa lider en transporte de paquetes y documentos.</div>
                    <div class="mb-2">&copy; Sitio Web 2022. Todos los Derechos Reservados.</div>
                    <div ><img src="src/assets/img/foo.png"  width="10%" height="10%" /> </div>
                </div>
            </div>
        </footer>
        <br></br>
        <br></br>

  </>     
  )
}
