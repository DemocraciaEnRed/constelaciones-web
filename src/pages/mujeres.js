import React from "react"
import slugify from 'slugify'
import "./styles.scss"
import Navbar from '../components/navbar'
import { useMujeresData } from '../hooks/useMujeresData'

const Mujeres = () => {
    const mujeresData = useMujeresData()
    const IS_HALF = 'is-half';
    const IS_THIRD = 'is-one-third';
    const IS_FULL = 'is-full';
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

    const classMainColumn = [ IS_FULL, IS_HALF, IS_HALF];
    let counterMain = 0;
    const getMainClassName = () => { 
        let classNameColumn;
         if(counterMain > classMainColumn.length - 1 ){
            counterMain = 0 
         }
        classNameColumn = classMainColumn[counterMain];
        counterMain++;
        return classNameColumn;
    }

    const getImage = (imagen, title, page) => {
        return (
            <>
                <figure className={
                    title=='Emily Nava' ||title=="Menfis Cedeño Cordero" ||title=="Yerifer Eliana Maytin Serrano"?
                    "is-align-items-start background-circle":'background-circle'}> 
                    <img src={`/assets/mujeres/${imagen}`} alt={title}/>
                </figure>
                <span className="text has-text-white is-size-5">{page && "Conoce la historia de"}<br /><span className="is-uppercase has-text-weight-bold">{title}</span></span>
            </>
        )
    }
    return (
      <main>
        <title>Mujeres - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight bg-mujer">
            <div className="container is-fluid">
                <h2 className="title vertical-title-desktop   is-size-1-desktop has-text-primary is-uppercase">Lideresas</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                    <div className="columns">
                        <div className="column">
                            <p className="has-text-white is-size-2-tablet is-size-4-mobile py-6-desktop">Estas diez mujeres lideresas venezolanas comparten su historia de vida y la motivación detrás de sus liderazgos</p>
                        </div>
                        <div className="column mujeres-scrolled">
                            <div className="columns is-multiline mt-6">
                            {
                                mujeresData.map(({node: { imagen, title, page } }) => {
                                    const classNameColumn = page ? getMainClassName() : null;
                                        return (
                                            <>
                                                {page ?
                                                    <div className={`column has-text-centered ${classNameColumn}`}>
                                                        <a href={`/mujer/${slugify(title)}`} className="lideresas-img">
                                                            {getImage(imagen, title, page)}
                                                        </a>
                                                    </div>
                                                : null
                                                }
                                            </>
                                        )
                                    }
                                )  
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container has-text-centered">
                <h3 className="title is-size-2-tablet is-size-4-mobile mb-6 pb-6 has-text-primary">Este ejercicio fue realizado en el marco de la escuela de formación Tu Bandera es Mi Bandera y estas son las mujeres que hicieron parte del proceso en Cali, Bogotá y Cúcuta</h3>
                    <div className="columns is-multiline mt-6">
                        {
                          [...mujeresData].reverse().map(({node: { imagen, title } }) => {
                            const classNameColumn = getClassName();
                                return (
                                    <>
                                        <div className={`column ${classNameColumn}`}>
                                            <div className="lideresas-img">
                                                {getImage(imagen, title, false)}
                                            </div>
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