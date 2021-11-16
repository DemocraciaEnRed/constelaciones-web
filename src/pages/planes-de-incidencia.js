import React,{useState} from 'react'
import "./styles.scss"
import Navbar from '../components/navbar'
import mapaBogota from './assets/mapa-bogota.png'
import mapaCali from './assets/mapa-cali.png'
import mapaCucuta from './assets/mapa-cucuta.png'
import Lightbox from "react-image-lightbox";

function PlanesDeIncidencia(){
    const [showLightbox, setShowLightbox] = useState(false);
    const [place,setPlace]=useState('bogota')
    const placeObject={
        bogota:{
            name:"Bogotà",
            objetivo:"objetivo-bogota",
            grupo: "Incidencia Bogota",
            mapa:mapaBogota

        },
        cali:{
            name:"Cali",
            objetivo:"objetivo-cali",
            grupo: "Incidencia cali",
            mapa:mapaCali

        },
        cucuta:{
            name:"Cùcuta",
            objetivo:"objetivo-Cucuta",
            grupo: "Incidencia Cucuta",
            mapa:mapaCucuta

        }
    }
    const handleOnclick=(value)=>{
        setPlace(value)
    }
    return (
        <main>
            <title>Plan de Incidencia - CONSTELACIONES DE INCIDENCIA</title>
            <Navbar />
            <section className="main-container pb-6 bg-mujer">
                <div className="hero is-fullheight container py-6-desktop px-6-desktop is-flex is-flex-direction-column is-justify-content-center">
                    <h1 className="title mt-6 has-text-weight-light has-text-white has-text-centered is-size-1-desktop is-uppercase">Planes de incidencia</h1>
                    <p className="title has-text-white has-text-centered is-size-6">DogeCoin buying growth hacker. Python-learning destitute growth hacker. Microdosing CryptoPunk rationalist. Ryan Hoover-funded weird European NFT startup. SPAC leading Testflight user. Substack blogging Thiel Fellow dropout. </p>
                    <p className="title has-text-white has-text-centered is-size-6">
                    Generalist-reading secondary markets buyer. LTV/CAC focused mentally exhausted startup founders. Snapchat-based GPT-3 written poetry. Doc-sending, TAM boosted IPO leading founder. Satoshi themed Macbook air apologist.</p>
                    <p className="title has-text-white has-text-centered is-size-6">
                    Javascript writing capital markets. Out of touch, ad buying venture investor. Consumer Social underground crypto newsletter. Tragically market capped Bitcoin miner. Accredited investor software engineer.</p>
                </div>
                <div className="container py-6-desktop  px-6-desktop px-3">
                    <h2 className="has-text-weight-light title has-text-white has-text-centered is-size-2-desktop is-uppercase">Donde actuamos</h2>
                    <div className="my-3 is-flex is-justify-content-space-evenly">
                        <button onClick={()=>handleOnclick('cali')}className="button is-normal is-warning is-outlined">Cali</button>
                        <button onClick={()=>handleOnclick('cucuta')}className="button is-normal is-warning is-outlined">Cùcuta</button>
                        <button onClick={()=>handleOnclick('bogota')}className="button is-normal is-warning is-outlined">Bogotà</button>
                    </div>
                    <figure className="is-hidden-touch my-4 p-5 mapa-incidencia">
                        <img src={placeObject[place].mapa} alt={`Mapa de ${placeObject[place].name}`} />    
                    </figure>
                    <figure className="is-hidden-desktop my-4 p-5 mapa-incidencia" onClick={() => setShowLightbox(true)}
                    onKeyDown={() => setShowLightbox(true)}>
                        <img src={placeObject[place].mapa} alt={`Mapa de ${placeObject[place].name}`} />    
                    </figure>
                    {showLightbox && (
                        <Lightbox
                        mainSrc={placeObject[place].mapa}
                        onCloseRequest={() => setShowLightbox(false)}
                        wrapperClassName="lightbox-mapa-incidencia"
                        />
                    )}                 
                    
                    <h3 className="has-text-primary is-size-4">Grupo:< span className="mt-3 has-text-white">{placeObject[place].grupo}</span> </h3>   
                    <div className="is-flex is-flex-direction-column is-align-items-center">                                         
                        <h3 className="mt-6 has-text-primary has-text-centered is-size-4">Objetivo</h3>
                        <p className="has-text-centered has-text-white">{placeObject[place].objetivo}</p>
                        <button className="mt-4 button is-normal is-warning is-outlined">Descargá el plan de {placeObject[place].name}</button>
                    </div>
                </div>
               
            </section>
            
            
            
        </main>
    )
}

export default PlanesDeIncidencia