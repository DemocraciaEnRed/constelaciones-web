import React from "react"
import slugify from 'slugify'
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import { useMujeresData } from '../hooks/useMujeresData'

const Mujeres = () => {
    const mujeresData = useMujeresData()
    const IS_HALF = 'is-half';
    const IS_THIRD = 'is-one-third';
    const classColumn = [ IS_HALF,IS_HALF, IS_THIRD,IS_THIRD,IS_THIRD ];
    let counter = 0;
    const getClassName = () => { 
        let classNameColumn;
         if(counter > classColumn.length - 1 ){
             counter = 0 
         }
        classNameColumn = classColumn[counter];
        counter++;
        return classNameColumn;
    }
    const getImage = (imagen, title, page) => {
        return (
            <>
                <figure> 
                    <img src={`/assets/mujeres/${imagen}`} alt={title}/>
                </figure>
                <span className="text has-text-white">{page && "Conoce la historia de"}<br /><span className="is-uppercase has-text-weight-bold">{title}</span></span>
            </>
        )
    }
    return (
      <main>
        <title>Mujeres - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb>
                    <BreadcrumbItem text="Home" url="/" />
                    <BreadcrumbItem text="Mujeres" url="/mujeres" isActive />
                </Breadcrumb>
                <h2 className="title vertical-title-desktop is-family-secondary is-size-1-desktop has-text-primary is-uppercase">Lideresas</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                    <p className="has-text-white is-size-5 is-size-4-desktop py-6-desktop">Estas mujeres migrantes son una representación de la resiliencia y la motivación por garantizar los derechos de los y las migrantes. </p>
                    <p className="has-text-white has-text-weight-semibold is-size-5 is-size-4-desktop py-6">Conoce las historias de estas mujeres migrantes que con sus luchas se convierten en focos de cambio, <span className="has-text-primary">en constelaciones de acción.</span></p>
                </div>
                <div className="container has-text-centered">
                <h3 className="title is-size-4 mb-6"><span className="has-text-primary">Clickea en las lideresas</span> para conocer toda su historia</h3>
                    <div className="columns is-multiline mt-6">
                        {
                          mujeresData.map(({node: { imagen, title, page } }) => {
                            const classNameColumn = getClassName();
                                return (
                                    <>
                                        <div className={`column ${classNameColumn}`}>
                                            {page ?
                                                <a href={`/mujer/${slugify(title)}`} className="lideresas-img">
                                                    {getImage(imagen, title, page)}
                                                </a>
                                            :
                                            <div className="lideresas-img">
                                                    {getImage(imagen, title, page)}
                                            </div>
                                            }
                                        </div>
                                    </>
                                )
                            }
                          )  
                        }
                    </div>
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default Mujeres