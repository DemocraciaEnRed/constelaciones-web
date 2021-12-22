import React from "react"
import "./styles.scss"
import bgestrellas from "./assets/bg-estrellas.gif"
import logo from "../pages/assets/logo-constelaciones.svg"
import logoWhiteLines from "../pages/assets/logo-white-lines.svg"
import logoYellowLine from "../pages/assets/logo-yellow-line.svg"
import {Link} from 'gatsby'
import Seo from "../components/seo"

const IndexPage = () => { 
  return (
    <React.Fragment>
      {/* <Seo/> */}
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      <meta name="title" content="CONSTELACIONES DE INCIDENCIA"/>
      <meta name="description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://constelaciones.co/"/>
      <meta property="og:title" content="CONSTELACIONES
      DE INCIDENCIA"/>
      <meta property="og:description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>
      <meta property="og:image" content="https://constelaciones.co/share.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://constelaciones.co/"/>
      <meta property="twitter:title" content="CONSTELACIONES
      DE INCIDENCIA"/>
      <meta property="twitter:description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>
      <meta property="twitter:image" content="https://constelaciones.co/share.png"/>
      
      <section className="hero is-fullheight proximamente" style={{backgroundImage: `url(${bgestrellas})`}}>
        <div className="hero-body main-logo">
          <div className="container is-justify-content-center has-text-centered">
          <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          
          <div className="is-relative"><img src={logoWhiteLines} className="logo-intro white-lines is-hidden-touch" width={150}/>
            <img src={logoYellowLine} className="logo-intro yellow-lines image is-hidden-touch" width={150}/>
            <img src={logoWhiteLines} className="logo-intro white-lines is-hidden-desktop" width={60}/>
            <img src={logoYellowLine} className="logo-intro yellow-lines image is-hidden-desktop" width={60}/>
            </div>
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
    </React.Fragment>
  )
}

export default IndexPage
