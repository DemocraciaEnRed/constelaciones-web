import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import AudioPlayer from "react-h5-audio-player";
import "../pages/styles.scss";
import Navbar from "../components/navbar";
import pointer from "../pages/assets/pointer.svg";

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
  const SmoothScroll = require("smooth-scroll");
  new SmoothScroll('a[href*="#"]');
}

const Mujer = ({
  pageContext: {
    title,
    origen,
    destino,
    recorrido,
    motivacion,
    palabras_clave,
    imagen,
    imagen_extra,
    audio,
    audio_extra,
    ilustraciones,
    video,
  },
}) => {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <main>
      <title>Mujeres - {title} </title>
      <Navbar />
      <section className="main-container bg-mujer py-6 hero is-fullheight">
        <div className="container is-fluid">
          <h2
            className={
              title == "Yerifer Eliana Maytin Serrano" ||
              title == "Celianis Marluibes Pulido Moreno"
                ? "title vertical-title-desktop   is-size-1-desktop has-text-primary is-uppercase yerifer"
                : "title vertical-title-desktop   is-size-1-desktop has-text-primary is-uppercase"
            }
          >
            {title}
          </h2>
          <div className="container columns is-vcentered pt-6-desktop ml-6-desktop pl-6-desktop mujer-container">
            <figure className="column is-half image img-mujer ml-6-desktop">
              <img src={`/assets/mujeres/${imagen}`} />
            </figure>
            <div className="column">
              <div className=" is-hidden-touch  info-timeline pb-6 mb-6">
                <ul className="is-flex is-justify-content-space-between">
                  <li className="is-flex is-flex-direction-column">
                    <div className="pointer-map has-text-white mb-0 pb-0">
                      <img src={pointer} className="pr-2" />
                      <span>{origen}</span>
                    </div>
                    <span className="text">{palabras_clave[0]}</span>
                    <span className="timeline-circle"></span>
                  </li>
                  <li className="is-flex is-flex-direction-column">
                    <span className="text">{palabras_clave[1]}</span>
                    <span className="timeline-circle"></span>
                  </li>
                  <li className="is-flex is-flex-direction-column">
                    <div className="pointer-map has-text-white">
                      <img src={pointer} className="pr-2" />
                      <span>{destino}</span>
                    </div>
                    <span className="text">{palabras_clave[2]}</span>
                    <span className="timeline-circle last"></span>
                  </li>
                </ul>
              </div>
              {audio && (
                <div className="pt-6 mb-6">
                  <h4 className="title has-text-primary is-size-5 has-text-weight-light">
                    Escuchando a {title}
                  </h4>
                  <AudioPlayer src={`/assets/mujeres/${audio}`} />
                  {audio_extra && (
                    <div className="mt-4">
                      <AudioPlayer src={`/assets/mujeres/${audio_extra}`} />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* <div className="scroll-to-links py-6">
                        <a className="circle-link my-6" href="#recorrido">
                            <span>recorrido</span>
                        </a>
                        {motivacion &&
                            <a className="circle-link my-6" href="#motivacion">
                                <span>motivación</span>
                            </a>
                        }
                    </div> */}
          </div>
          {ilustraciones && (
            <div className="pt-6 is-flex is-justify-content-space-evenly is-flex-wrap-wrap ilustraciones-container">
              {ilustraciones.map((ilustracion) => (
                <figure className="m-3 mx-0-mobile image img-ilustracion is-relative	">
                  <img
                    src={`/assets/ilustraciones/${ilustracion.src}`}
                    alt={`Imagen de ${ilustracion.alt}`}
                  />
                  
                </figure>
              ))}
              <div className="columns is-centered mt-3 description">
                <div className="column is-half"><h3 className="has-text-primary has-text-centered is-size-6 has-text-weight-light ">Son muchos los trazos que comparten las mujeres que han migrado desde Venezuela a Colombia, estas ilustraciones los representan</h3></div>
              
              </div>
            </div>

          )}
          {video ? (
            <div className="mt-6 is-flex is-justify-content-center">
              <iframe
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            ""
          )}
          <div className="container pl-0 ml-0 py-6">
            <h3 className="title has-text-primary is-size-4 has-text-weight-light is-uppercase ">{title}</h3>
            <div id="recorrido">
              <h4 className="is-uppercase title has-text-primary is-size-5 has-text-weight-light">
                Su camino recorrido
              </h4>
              <div className="columns">
                <div className="column is-half">
                  <p className="has-text-white pb-6">{recorrido}</p>
                </div>
                <div className="column is-half has-text-centered">
                  <div className="is-hidden-desktop info-timeline mb-6">
                    <div className="pointer-map has-text-white ml-6 mb-4 pb-0 ">
                      <img src={pointer} className="pr-2" />
                      <span className="has-text-weight-light">{origen}</span>
                    </div>
                    <ul className="is-block">
                      <li>
                        <span className="text has-text-weight-light">{palabras_clave[0]}</span>
                        <span className="timeline-circle"></span>
                      </li>
                      <li className="pt-6">
                        <span className="text has-text-weight-light">{palabras_clave[1]}</span>
                        <span className="timeline-circle"></span>
                      </li>
                      <li className="pt-6">
                        <span className="text has-text-weight-light">{palabras_clave[2]}</span>
                        <span className="timeline-circle last"></span>
                      </li>
                    </ul>
                    <div className="ml-6 pointer-map has-text-white mt-2">
                      <img src={pointer} className="pr-2" />
                      <span className="has-text-weight-light">{destino}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {imagen_extra && (
              <div className="my-6">
                <h4 className="title has-text-primary is-size-5 has-text-weight-light is-uppercase">
                Ventana a la historia de su migración
                </h4>
                <div className="ventana-container">
                  <figure
                    className="image image-sepia"
                    onClick={() => setShowLightbox(true)}
                    onKeyDown={() => setShowLightbox(true)}
                  >
                    <img src={`/assets/mujeres/${imagen_extra}`} />
                  </figure>
                  <div className="columns">
                      <h3 className="column is-half description has-text-primary is-size-6 has-text-weight-light ">Recuerdo de su camino</h3>
                  </div>
               
                  
                  </div>
                {showLightbox && (
                  <Lightbox
                    mainSrc={`/assets/mujeres/${imagen_extra}`}
                    onCloseRequest={() => setShowLightbox(false)}
                    wrapperClassName="image-sepia"
                  />
                )}
              </div>
            )}
            {motivacion && (
              <div id="motivacion" className="columns">
                <div className="column is-half ">
                  <h4 className="title has-text-primary is-size-5 has-text-weight-light is-uppercase">
                    ¿Qué te motivó a ser lideresa?
                  </h4>
                  <p className="has-text-white pb-6">{motivacion}</p>
                </div>
              </div>
            )}
          </div>
          <a
            className="circle-link circle-link-big my-6 mx-auto has-text-weight-light"
            href="/mujeres"
          >
            <span>Sigue conociendo a las lideresas</span>
          </a>
          <div className="is-flex is-justify-content-end is-align-items-center">
            <h3 className="has-text-white has-text-weight-light">Ilustraciones hechas por</h3>
            <figure className="m-3 image is-96x96 ">
              <img src="/assets/ilustraciones/IMG_1202.png" />
            </figure>
            <figure className="m-3 image img-ilustracion">
              <img src="/assets/ilustraciones/IMG_1200.png" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mujer;
