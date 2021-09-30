import React from "react"
import slugify from 'slugify'
import "../pages/styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import pointer from '../pages/assets/pointer.svg'

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
    const SmoothScroll = require('smooth-scroll');
    new SmoothScroll('a[href*="#"]');
}

const Mujer = ({ pageContext: { title, origen, destino, recorrido, motivacion, palabras_clave, imagen, imagen_extra, audio } }) => {
    return (
      <main>
        <title>Mujeres - {title} </title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb>
                    <BreadcrumbItem text="Home" url="/" />
                    <BreadcrumbItem text="Mujeres" url="/mujeres" />
                    <BreadcrumbItem text={title} url={`/mujer/${slugify(title)}`} isActive />
                </Breadcrumb>
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Dayana<br />Mendoza</h2>
                <div className="container is-flex is-justify-content-space-between py-6-desktop ml-6-desktop pl-6-desktop mujer-container">
                    <figure className="image img-mujer ml-6-desktop">
                        <img src={`/assets/mujeres/${imagen}`} />
                    </figure>
                    <div className="scroll-to-links py-6">
                        <a className="circle-link my-6" href="#recorrido">
                            <span>recorrido</span>
                            <span aria-hidden={true} />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                            <span aria-hidden={true}  />
                        </a>
                        {motivacion &&
                            <a className="circle-link my-6" href="#motivacion">
                                <span>motivación</span>
                                <span aria-hidden={true}  />
                                <span aria-hidden={true}  />
                                <span aria-hidden={true}  />
                                <span aria-hidden={true}  />
                            </a>
                        }
                    </div>
                </div>
                <div className="container pl-0 ml-0 pb-6">
                    <h3 className="title has-text-primary is-size-4 is-family-secondary">{title}</h3>
                    <div id="recorrido">
                        <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">Su camino recorrido</h4>
                        <div className="columns">
                            <div className="column is-half">
                                <p className="has-text-white pb-6">{recorrido}</p>
                             </div>
                            <div className="column is-half has-text-centered">
                                <div className="info-timeline mb-6">
                                    <div className="pointer-map has-text-white mb-0 pb-0"><img src={pointer} className="pr-2"/><span>{origen}</span></div>
                                    <ul>
                                        <li><span className="text">{palabras_clave[0]}</span><span className="timeline-circle"></span></li>
                                        <li><span className="text">{palabras_clave[1]}</span><span className="timeline-circle"></span></li>
                                        <li><span className="text">{palabras_clave[2]}</span><span className="timeline-circle last"></span></li>
                                    </ul>
                                    <div className="pointer-map has-text-white mt-3"><img src={pointer} className="pr-2" /><span>{destino}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {motivacion &&
                        <div id="motivacion">
                            <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">¿Qué te motivó a ser lidereza?</h4>
                            <p className="has-text-white pb-6">{motivacion}</p>
                        </div>
                    }
                    {imagen_extra &&
                        <div className="my-6">
                            <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">¿Qué te representa?</h4>
                            <figure className="image image-sepia">
                                <img src={`/assets/mujeres/${imagen_extra}`} />
                            </figure>
                        </div>
                    }

                    {audio &&
                        <div className="my-6">
                            <h4 className="title has-text-primary is-size-5 has-text-weight-semibold">Escuchando a {title}</h4>
                            <audio src={`/assets/mujeres/${audio}`} controls>
                                 Tu navegador no soporta reproductor de audio.
                            </audio>
                        </div>
                    }
                    
                </div>
                <a className="circle-link circle-link-big my-6 mx-auto" href="/mujeres">
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
  
  export default Mujer