import React from "react"
import "./styles.scss"
import bgestrellas from "./assets/bg-estrellas.gif"

const IndexPage = () => {
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      <section className="hero is-fullheight proximamente" style={{backgroundImage: `url(${bgestrellas})`}}>
        <div className="hero-body is-justify-content-center main-logo">
          <h1 className="title is-2">Próximamente</h1>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
