import React from "react"
import slugify from 'slugify'
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import { useMujeresData } from '../hooks/useMujeresData'

const Mujeres = () => {
    const mujeresData = useMujeresData()
    return (
      <main>
        <title>Mujeres - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb>
                    <BreadcrumbItem text="Home" url="/" />
                    <BreadcrumbItem text="Mujeres" url="/mujeres" isActive />
                </Breadcrumb>
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Liderezas</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                    <p className="has-text-white is-size-5 is-size-4-desktop py-6-desktop">Estas mujeres migrantes son una representación de la resiliencia y la motivación por garantizar los derechos de los y las migrantes. </p>
                    <p className="has-text-white has-text-weight-semibold is-size-5 is-size-4-desktop py-6">Conocé las historias de estas mujeres migrantes que con sus luchas se convierten en focos de cambio, <span className="has-text-primary">en constelaciones de acción.</span></p>
                </div>
                <div className="container has-text-centered">
                <h3 className="title is-size-4 mb-6"><span className="has-text-primary">Clickeá en las liderezas</span> para conocer toda su historia</h3>
                    <div className="columns mt-6">
                        {
                          mujeresData.map(({node: { imagen, title}}, index) => {
                            //todo: update grid  
                            const classn = index;
                                return (
                                    <div className={`column ${classn}`}>
                                    <a href={`/mujer/${slugify(title)}`} className="liderezas-img">
                                        <figure> 
                                            <img src={`/assets/mujeres/${imagen}`} alt={title}/>
                                        </figure>
                                        <span className="text has-text-white">Conocé la historia de <br /><span className="is-uppercase has-text-weight-bold">{title}</span></span>
                                    </a>
                                </div>
                                )
                            }
                          )  
                        }
                    </div>
                    {/* <div className="columns mt-6 pt-6">
                        <div className="column">
                            <figure className="liderezas-img"> 
                                <img src={'/assets/mujeres/SS1.jpeg'} />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="liderezas-img"> 
                                <img src={'/assets/mujeres/SS2.jpeg'} />
                            </figure>
                        </div>
                    </div>
                    <div className="columns mt-6">
                        <div className="column">
                            <figure className="liderezas-img"> 
                                <img src={'/assets/mujeres/SS3.jpeg'} />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="liderezas-img"> 
                                <img src={'/assets/mujeres/SS4.jpeg'} />
                            </figure>
                        </div>
                        <div className="column">
                            <figure className="liderezas-img"> 
                                <img src={'/assets/mujeres/SS5.jpeg'} />
                            </figure>
                        </div>
                    </div> */}
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Mujeres