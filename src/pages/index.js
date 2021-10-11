import React, { useState, useEffect } from "react"
import logo from "./assets/logo-constelaciones.svg"
import "./styles.scss"
import Navbar from '../components/navbar'
import { CSSTransition } from 'react-transition-group';
import { useMujeresData } from '../hooks/useMujeresData'
import Constelaciones from '../components/constelaciones';
import Particle from '../components/particle';

const IndexPage = () => {
  const [intro, setIntro] = useState(true);
  const [slide, setSlide] = useState(0)
  useEffect(() => {
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
        setIntro(false);
      }
    }, 15000)
  }, [])
  const mujeresData = useMujeresData()
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      <CSSTransition
        in={!intro}
        timeout={500}
        classNames="navbar"
        unmountOnExit
      >
        <>
        <Navbar />
        <Constelaciones />
        <Particle mujeres={mujeresData} />
        </>
      </CSSTransition>
      {intro && 
      <section className="hero is-fullheight">
        {slide === 0 && 
          <div className="hero-body is-justify-content-center main-logo">
          <figure className="image px-6">
            <img src={logo} alt="Constelaciones de Incidencia"/>
          </figure>
          <h1 className="title is-2">
            CONSTELACIONES
            <br />
            DE INCIDENCIA
          </h1>
        </div>
        }
        {slide === 1 && 
          <div className="hero-body is-justify-content-center">
          <h2 className="title has-text-centered title-intro">
            Constelaciones es una apuesta para 
            <br />
            <span className="has-text-primary">visibilizar los liderazgos de mujeres migrantes y organizaciones sociales</span>
            <br />
            que trabajan con migrantes.
          </h2>
        </div>
        }
        { slide === 2 &&
         <div className="hero-body is-justify-content-center">
          <h3 className="title has-text-centered px-6 mx-6 title-intro">
          Esta iniciativa es realizada en el marco del proyecto Escuelita Tu Bandera es Mi Bandera, un proyecto colectivo realizado por Fundación Artemisas y el Derecho a No Obedecer, La Fundación Konrad Adenauer y el Centro para el Desarrollo Global (Center for Global Development) en donde fortalecimos las capacidades de participación e incidencia ciudadana, de lideresas de organizaciones migrantes y de las comunidades de acogida de Cali, Bogotá y Cúcuta.
          </h3>
        </div>
        }
        <button className="button skip-intro is-primary" onClick={() => setIntro(false)}>Saltar intro</button>
      </section>
      }
    </main>
  )
}

export default IndexPage
