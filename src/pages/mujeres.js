import React from "react"
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'

import ss1 from "./assets/liderezas/SS1.jpeg"
import ss2 from "./assets/liderezas/SS2.jpeg"
import ss3 from "./assets/liderezas/SS3.jpeg"
import ss4 from "./assets/liderezas/SS4.jpeg"
import ss5 from "./assets/liderezas/SS5.jpeg"


const Mujeres = () => {
    return (
      <main>
        <title>Mujeres - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb />
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Liderezas</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                    <p className="has-text-white is-size-5 is-size-4-desktop py-6-desktop">Estas mujeres migrantes son una representación de la resiliencia y la motivación por garantizar los derechos de los y las migrantes. </p>
                    <p className="has-text-white has-text-weight-semibold is-size-5 is-size-4-desktop py-6">Conocé las historias de estas mujeres migrantes que con sus luchas se convierten en focos de cambio, <span className="has-text-primary">en constelaciones de acción.</span></p>
                </div>
                <div className="container has-text-centered">
                <h3 className="title is-size-4"><span className="has-text-primary">Clickeá en las liderezas</span> para conocer toda su historia</h3>
                    <div class="columns mt-6 pt-6">
                        <div class="column">
                            <figure className="liderezas-img"> 
                                <img src={ss1} />
                            </figure>
                        </div>
                        <div class="column">
                            <figure className="liderezas-img"> 
                                <img src={ss2} />
                            </figure>
                        </div>
                    </div>
                    <div class="columns mt-6">
                        <div class="column">
                            <figure className="liderezas-img"> 
                                <img src={ss3} />
                            </figure>
                        </div>
                        <div class="column">
                            <figure className="liderezas-img"> 
                                <img src={ss4} />
                            </figure>
                        </div>
                        <div class="column">
                            <figure className="liderezas-img"> 
                                <img src={ss5} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Mujeres