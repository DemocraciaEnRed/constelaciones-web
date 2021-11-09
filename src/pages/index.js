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
        <div className="hero-body is-justify- main-logo">
          <div className="container has-text-centered">
          <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          <img src={logo} className="image" width={150}/>
          <h1 className="title is-2 ml-3 has-text-left">CONSTELACIONES<br/>DE INCIDENCIA</h1>
        </div>
          <br/> 
          <div className="buttons is-centered">
            <Link to="/home?intro=true" className="button is-primary is-medium">COMENZAR</Link>
          </div>
          <Link to="/home" className="has-text-white">Saltear intro</Link>
        </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
