import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import Map from '../components/map'

const Organizaciones = () => {
    const [ data, setData ] = useState(null)
    const [ dataLoaded, setDataLoaded ] = useState(false) 
    useEffect(() => {
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1b5c72bq6SCtlfOqpXu6V-rZN8Tq1eJ3jgw-fYO4jEqQ/values/mapeo?key=${process.env.SHEETS_API_KEY}`)
      .then((res) => {
        delete res.data.values[0]
        setData(res.data.values)
      })
      .then(() => {
        setDataLoaded(true)
      })
    }, [])

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
                  {dataLoaded && 
                    <Map data={data} />
                  }
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Organizaciones