import React from "react"
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'

import ss1 from "./assets/liderezas/SS1.jpeg"

// TODO: dynamic pages with different content
const Mujeres = () => {
    return (
      <main>
        <title>Mujeres - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb />
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Dayana<br />Mendoza</h2>
                <div className="container is-flex is-justify-content-space-between py-6-desktop ml-6-desktop pl-6-desktop mujer-container">
                    <figure className="image img-mujer ml-6-desktop">
                        <img src={ss1} />
                    </figure>
                    <div className="scroll-to-links py-6">
                        <a className="circle-link my-6" href="#recorrido">
                            <span>recorrido</span>
                            <span aria-hidden={true} />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                        </a>
                        <a className="circle-link my-6" href="#motivacion">
                            <span>motivación</span>
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                        </a>
                    </div>
                </div>
                <div className="container pl-0 ml-0 pb-6">
                    <h3 className="title has-text-primary is-size-4 is-family-secondary">Dayana Mendoza</h3>
                    <div id="#recorrido">
                        <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">Su camino recorrido</h4>
                        <p className="has-text-white pb-6">Migrar... No saber como meter tu vida en una maleta. Primero migró mi hijo mayor, y luego mi esposo por la situación política y el hostigamiento, después de seis meses lograron reunir el dinero y nos vinimos mis dos hijos más pequeños y yo. Llegó el día que no quería ya que era por obligación y no por placer. Sí, fue un viaje cómodo y planificado pero cargado de tristeza, dolor al dejar a mi papá, hermano y familia, pero a la vez cargado de emoción porque nos reencontraríamos como familia. Debido a los distintos obstáculos que uno pasa al llegar fue que comenzó la materialización de uno de mis proyectos, Una organización dirigida a la mujer migrante. Puedo decir que gracias a mi Dios, poco a poco el camino se nos ha vuelto más suave, pero sigo  pidiendo poder reencontrarme con mis seres queridos que están en mi país.</p>
                        {/* <div className="info-timeline">
                            <ul>
                                <li><span className="timeline-circle"></span><span className="text">Migrar</span></li>
                                <li><span className="timeline-circle"></span><span className="text">Dolor</span></li>
                                <li><span className="timeline-circle last"></span><span className="text">Encuentro</span></li>
                            </ul>
                        </div> */}
                    </div>

                    <div id="#motivacion">
                        <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">¿Qué te motivó a ser lidereza?</h4>
                        <p className="has-text-white pb-6">Migrar... No saber como meter tu vida en una maleta. Primero migró mi hijo mayor, y luego mi esposo por la situación política y el hostigamiento, después de seis meses lograron reunir el dinero y nos vinimos mis dos hijos más pequeños y yo. Llegó el día que no quería ya que era por obligación y no por placer. Sí, fue un viaje cómodo y planificado pero cargado de tristeza, dolor al dejar a mi papá, hermano y familia, pero a la vez cargado de emoción porque nos reencontraríamos como familia. Debido a los distintos obstáculos que uno pasa al llegar fue que comenzó la materialización de uno de mis proyectos, Una organización dirigida a la mujer migrante. Puedo decir que gracias a mi Dios, poco a poco el camino se nos ha vuelto más suave, pero sigo  pidiendo poder reencontrarme con mis seres queridos que están en mi país.</p>
                    </div>
                </div>
                <a className="circle-link circle-link-big my-6 mx-auto" href="#motivacion">
                    <span>Seguí conociendo a las liderezas</span>
                    <span aria-hidden={true}  />
                    <span aria-hidden={true}  />
                    <span aria-hidden={true}  />
                    <span aria-hidden={true}  />
                </a>
                
            </div>
          </section>
      </main>
    )
  }
  
  export default Mujeres