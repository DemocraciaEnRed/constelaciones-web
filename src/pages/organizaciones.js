import React from "react"
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import Map from '../components/map'

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
                <h2 className="title vertical-title-desktop organizaciones is-family-secondary is-size-2-desktop has-text-primary is-uppercase">Organizaciones</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                  <p className="has-text-white is-size-5 pb-6 pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies et semper dolor enim at. Condimentum ipsum lectus vulputate tempor, a. Id felis quisque suspendisse id elit. Nec in at pharetra arcu aenean et. Molestie tempus pharetra, velit ultrices enim elit tellus. Maecenas cras ipsum placerat risus.</p>
                  <Map />
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Organizaciones