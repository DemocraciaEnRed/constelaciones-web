import React from "react"
import "./styles.scss"
import bgestrellas from "./assets/bg-estrellas.gif"
import logo from "../pages/assets/logo-constelaciones.svg"
import {Link} from 'gatsby'

const IndexPage = () => { 
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      <section className="hero is-fullheight proximamente" style={{backgroundImage: `url(${bgestrellas})`}}>
        <div className="hero-body main-logo">
          <div className="container is-justify-content-center has-text-centered">
          <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          <img src={logo} className="image is-hidden-touch" width={150}/>
          <img src={logo} className="image is-hidden-desktop" width={60}/>
          <h1 className="title is-2 ml-3 has-text-left">CONSTELACIONES<br/>DE INCIDENCIA</h1>
        </div>
          <br/> 
          <div className="buttons is-centered">
            <Link to="/home?intro=true" className="button is-primary is-medium">COMENZAR</Link>
          </div>
          <Link to="/home" className="has-text-white">Saltear intro</Link>
          <br />
          <br />
          <p className="is-size-7 has-text-white" style={{'opacity': 0.4}}> Para una mejor visualización,<br/>recomendamos Google Chrome o Firefox</p>
        </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
