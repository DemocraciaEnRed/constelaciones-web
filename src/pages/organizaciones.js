import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import Map from '../components/map'
import Table from '../components/table'
import {Link} from 'gatsby'
const Organizaciones = () => {
    const [ data, setData ] = useState([])
    const [ dataLoaded, setDataLoaded ] = useState(false) 
    const columns = React.useMemo(
      () => [
        {
          Header: 'Organización',
          accessor: 'title',
        },
        {
          Header: 'Descripción',
          accessor: 'description',
        },
        {
          Header: 'Ciudad',
          accessor: 'city',
        },
        {
          Header: 'País',
          accessor: 'country',
        },
        {
          Header: 'Contacto',
          accessor: 'contact',
          Cell: ({ row }) => {
            let link = row.original.contact;
            if(row.original.contact && row.original.contact.includes('@')) {
              link = `mailto:${row.original.contact}`;
            }
            return (
              <Link className="has-text-primary" href={link}>{row.original.contact}</Link>
            )
          }
        },
      ],
      []
    )

    const mapData = (data) => {
      const titles = [...data[0]]
      data.shift();
      const newarray = []
      data.map((elem, mainIndex) => {
        newarray[mainIndex] = {}
        elem.map((value, index) => {
          newarray[mainIndex][titles[index]] = value
        })
      })
      return newarray;
    }

    useEffect(() => {
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1b5c72bq6SCtlfOqpXu6V-rZN8Tq1eJ3jgw-fYO4jEqQ/values/mapeo?key=${process.env.SHEETS_API_KEY}`)
      .then((res) => {
        const dataFormatted = mapData(res.data.values);
        setData(dataFormatted)
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
                <h2 className="title vertical-title-desktop organizaciones   is-size-2-desktop has-text-primary is-uppercase">Organizaciones</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                  {dataLoaded && 
                    <>
                      <Map data={data} />
                      <Table data={data} columns={columns} />
                    </>
                  }
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Organizaciones