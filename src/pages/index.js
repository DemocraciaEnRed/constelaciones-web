import React from "react"
import "./styles.scss"
import bgestrellas from "./assets/bg-estrellas.gif"
import logo from "../pages/assets/logo-constelaciones.svg"
import {Link} from 'gatsby'
import audio from'./assets/audio-constelaciones.mp3'

const IndexPage = () => {
  const audioConstelaciones = new Audio(audio);
 
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      <section className="hero is-fullheight proximamente" style={{backgroundImage: `url(${bgestrellas})`}}>
        <div className="hero-body is-justify-content-center main-logo">
        <figure className="image is-128x128">
          <img src={logo}/>
        </figure>
        {/* <Link onClick={ audioConstelaciones.play()} className="button is-primary" to="/home">Saltar intro</Link>
        <Link onClick={ audioConstelaciones.play()} className="button is-primary" to="/home">Ver intro</Link> */}
        
          <h1 className="title is-2">Próximamente</h1>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
