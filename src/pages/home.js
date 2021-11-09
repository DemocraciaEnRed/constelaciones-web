import React, { useState, useEffect } from "react"
import logo from "./assets/logo-constelaciones.svg"
import bgestrellas from "./assets/bg-estrellas.gif"
import "./styles.scss"
import Navbar from '../components/navbar'
import { CSSTransition } from 'react-transition-group';
import { useMujeresData } from '../hooks/useMujeresData'
import Particle from '../components/particle';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState(true);
  const [slide, setSlide] = useState(0);

  const skipIntro = () => {
    setIntro(false);
    sessionStorage.setItem('introConstelaciones', true);
  }

  useEffect(() => {
    setLoading(false)
    const needsIntro = sessionStorage.getItem('introConstelaciones');
    if (!needsIntro) {
      setTimeout(() => {
        if (intro) {
          setSlide(1);
        }
      }, 3000)
      setTimeout(() => {
        if (intro) {
          setSlide(2);
        }
      }, 7000)
      setTimeout(() => {
        if (intro) {
          skipIntro()
        }
      }, 15000)
    } else {
      setIntro(false);
    }
   
  }, [])

  const mujeresData = useMujeresData()
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      {!loading ? (
        <>
          <CSSTransition
          in={!intro}
          timeout={500}
          classNames="navbar"
          unmountOnExit
        >
          <>
          <section className="hero is-fullheight bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <Navbar />
            <Particle mujeres={mujeresData} />
            
          </section>
          </>
        </CSSTransition>
        {intro && 
        <section className="hero is-fullheight">
          {slide === 0 && 
            <div className="hero-body is-justify-content-center main-logo bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <figure className="image px-6">
              <img src={logo} alt="Constelaciones de Incidencia"/>
            </figure>
            <h1 className="title is-2 has-text-weight-light	">
              CONSTELACIONES
              <br />
              DE INCIDENCIA
            </h1>
          </div>
          }
          {slide === 1 && 
            <div className="hero-body is-justify-content-center bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <h2 className="title has-text-centered title-intro has-text-weight-light	">
              Constelaciones es una apuesta para 
              <br />
              <span className="has-text-primary has-text-weight-light	">visibilizar los liderazgos de mujeres migrantes y organizaciones sociales</span>
              <br />
              que trabajan con migrantes.
            </h2>
          </div>
          }
          { slide === 2 &&
            <div className="hero-body is-justify-content-center bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            {/* <h3 className="title has-text-centered px-6 mx-6 title-intro">
            Esta iniciativa es realizada en el marco del proyecto Escuelita Tu Bandera es Mi Bandera, un proyecto colectivo realizado por Fundación Artemisas y el Derecho a No Obedecer, La Fundación Konrad Adenauer y el Centro para el Desarrollo Global (Center for Global Development) en donde fortalecimos las capacidades de participación e incidencia ciudadana, de lideresas de organizaciones migrantes y de las comunidades de acogida de Cali, Bogotá y Cúcuta.
            </h3> */}
            <h3 className="title has-text-centered px-6 mx-6 title-intro has-text-weight-light">Haz click en las estrellas para conocer historias de lideresas</h3>
          </div>
          }
          <button className="button skip-intro is-primary" onClick={skipIntro}>Saltar intro</button>
        </section>
        }
        </>
      ) : null
      }
     
    </main>
  )
}

export default IndexPage
