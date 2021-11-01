import React, { useEffect, useState } from "react"
import logo from "./assets/logo-constelaciones.svg"
import "./styles.scss"
import Constelaciones from '../components/constelaciones';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      {!loading &&
        <Constelaciones />
      }
      <section className="hero is-fullheight proximamente">
        <div className="hero-body is-justify-content-center main-logo">
          <h1 className="title is-2">Próximamente</h1>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
