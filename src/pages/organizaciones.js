import React from "react"
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'

const Organizaciones = () => {
    return (
      <main>
        <title>Organizaciones - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb>
                    <BreadcrumbItem text="Home" url="/" />
                    <BreadcrumbItem text="Organizaciones" url="/organizaciones" isActive />
                </Breadcrumb>
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Organizaciones</h2>
            </div>
          </section>
      </main>
    )
  }
  
  export default Organizaciones