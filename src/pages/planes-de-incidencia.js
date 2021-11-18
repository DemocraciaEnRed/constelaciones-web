import React,{useState} from 'react'
import Lightbox from "react-image-lightbox";
import "./styles.scss"
import Navbar from '../components/navbar'
import mapaBogota from './assets/planes-de-incidencia/mapa-bogota.png'
import mapaCali from './assets/planes-de-incidencia/mapa-cali.png'
import mapaCucuta from './assets/planes-de-incidencia/mapa-cucuta.png'
import plotterBogota from './assets/planes-de-incidencia/plotter-bogota.pdf'
import plotterCucuta from './assets/planes-de-incidencia/plotter-cucuta.pdf'
import plotterCali from './assets/planes-de-incidencia/plotter-cali.pdf'

function PlanesDeIncidencia(){
    const [showLightbox, setShowLightbox] = useState(false);
    const [viewMore,setViewMore]=useState(false)
    const placeObject={
        bogota:{
            name:"Bogotá",
            objetivo:"Buscamos transformar los imaginarios que recaen sobre las mujeres y que se agudizan por el hecho de ser migrantes, refugiadas, colombianas retornadas, lideresas, madres cabezas de familia, entre muchas otras cosas, y que, además, dificultan su acceso integral a servicios de salud sexual y reproductiva en 4 localidades de Bogotá.",
            grupo: "Incidencia Bogotá",
            mapa:mapaBogota,
            descargable:plotterBogota

        },
        cali:{
            name:"Cali",
            objetivo:"Incidir en la generación de oportunidades, garantías y promoción de los derechos de mujeres racializadas y migrantes, y visibilizar las narrativas de la discriminación que sufren en la comuna 13 de la de Cali Incidir en la generación de oportunidades, garantías y promoción los derechos de mujeres racializadas y migrantes, y visibilizar las narrativas de la discriminación que sufren en la comuna 13 de la ciudad de Cali.",
            grupo: "Incidencia Cali",
            mapa:mapaCali,
            descargable:plotterCali

        },
        cucuta:{
            name:"Cúcuta",
            objetivo:"Generar espacios seguros para las mujeres que permitan conocer las problemáticas que enfrentan las mujeres fronterizas en la ciudad de Cúcuta.",
            grupo: "Incidencia Cúcuta",
            mapa:mapaCucuta,
            descargable:plotterCucuta

        }
    }
    const [place,setPlace]=useState(placeObject['bogota'])
    const handleOnclick=(value)=>{
        setPlace(placeObject[value])
    }
    return (
        <main>
            <title>Plan de Incidencia - CONSTELACIONES DE INCIDENCIA</title>
            <Navbar />
            <section className="main-container pb-6 bg-mujer px-2">
                <div className="columns hero is-medium container py-6-desktop px-6-desktop is-flex is-flex-direction-column is-justify-content-center">
                    <h1 className="title mt-6 has-text-weight-light has-text-white has-text-centered is-size-1-desktop is-uppercase">Planes de incidencia</h1>
                    <div className="column is-three-fifths is-offset-one-fifth">
                    <p className="title has-text-white has-text-centered is-size-6">Estos planes de incidencia nacen del interés de lideresas colombianas y venezolanas por juntarse y construir proyectos para transformar las realidades injustas que ellas experimentan en sus comunidades y que se replican en distintas partes de Colombia. </p>
                    <p className="title has-text-white has-text-centered is-size-6">
                    Los grupos de cada ciudad son el fruto del proceso formativo Escuelita de Incidencia para mujeres Tu Bandera es Mi Bandera, iniciativa de El Derecho a No Obedecer, proyecto de la Corporación Otraparte en alianza con Artemisas, cuyo objetivo principal ha sido fortalecer las competencias cívicas de organizaciones sociales de migrantes y de comunidades de acogida lideradas por mujeres en las ciudades de Bogotá, Cali y Cúcuta, y que tuvo lugar en julio y agosto de 2021. <span className="has-text-primary" onClick={()=>setViewMore(true)}>{!viewMore? "Continuar leyendo":""}</span></p>
                    { viewMore &&
                    <div className="show-text">
                        <p className="title has-text-white has-text-centered is-size-6">
                        Como parte del proceso formativo, las mujeres tuvieron la oportunidad de conocerse, de establecer diálogos y relaciones cercanas con otras mujeres con las que comparten realidades similares a las de ellas o, por el contrario, que experimentan otras realidades muy distintas. En la Escuelita se abordaron distintas temáticas como las economías del cuidado, conceptos centrales sobre las violencias basadas en género, formación en Derechos Humanos, instituciones democráticas e incidencia política.</p>
                        <p className="title has-text-white has-text-centered is-size-6">
                        Durante la última etapa de este proceso, las mujeres de cada ciudad construyeron un plan de incidencia alrededor de problemáticas identificadas en sus ciudades, con sus respectivos objetivos, metas, actividades e indicadores.</p>
                        <p className="title has-text-white has-text-centered is-size-6">
                        Hoy, estas mujeres vienen desde diferentes lugares de Colombia a socializar sus planes de incidencia con actores de interés que puedan aportar a la consolidación de sus liderazgos para alcanzar las transformaciones y sueños colectivos que las movilizan.</p>
                        <p className="title has-text-white has-text-centered is-size-6">
                        A continuación, te invitamos a conocer algunos de los elementos que componen estos planes y a encontrar formas de apoyarlos.</p>
                    </div>}
                    </div>
                    
                </div>
                <div className="container py-6-desktop  px-6-desktop px-3">
                    <h2 className="has-text-weight-light title has-text-white has-text-centered is-size-2-desktop is-uppercase">Donde actuamos</h2>
                    <div className="my-3 is-flex is-justify-content-space-evenly">
                        <button onClick={()=>handleOnclick('cali')}className="button is-normal is-warning is-outlined">Cali</button>
                        <button onClick={()=>handleOnclick('cucuta')}className="button is-normal is-warning is-outlined">Cúcuta</button>
                        <button onClick={()=>handleOnclick('bogota')}className="button is-normal is-warning is-outlined">Bogotá</button>
                    </div>
                    <figure className="column is-three-fifths is-offset-one-fifth is-hidden-touch my-4 p-5 mapa-incidencia">
                        <img src={place.mapa} alt={`Mapa de ${place.name}`} />    
                    </figure>
                    <figure className="is-hidden-desktop my-4 p-5 mapa-incidencia" onClick={() => setShowLightbox(true)}
                    onKeyDown={() => setShowLightbox(true)}>
                        <img src={place.mapa} alt={`Mapa de ${place.name}`} />    
                    </figure>
                    {showLightbox && (
                        <Lightbox
                        mainSrc={place.mapa}
                        onCloseRequest={() => setShowLightbox(false)}
                        wrapperClassName="lightbox-mapa-incidencia"
                        />
                    )}                 
                    
                    <h3 className="column is-three-fifths is-offset-one-fifth has-text-primary is-size-4-desktop is-size-6">Grupo: < span className="mt-3 has-text-white">{place.grupo}</span> </h3>   
                    <div className="is-flex is-flex-direction-column is-align-items-center column is-three-fifths is-offset-one-fifth">                                         
                        <h3 className="mt-6 has-text-primary has-text-centered is-size-4">Objetivo</h3>
                        <p className="has-text-centered has-text-white">{place.objetivo}</p>
                        <a href={place.descargable} className="mt-6 button is-normal is-warning is-outlined" target="_blank">Descargá el plan de {place.name}</a>
                    </div>
                </div>
               
            </section>
            
        </main>
    )
}

export default PlanesDeIncidencia