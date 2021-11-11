import React,{useState} from 'react'
import "./styles.scss"
import Navbar from '../components/navbar'

function PlanesDeIncidencia(){

    const [place,setPlace]=useState('bogota')
    const placeObject={
        bogota:{
            name:"Bogota",
            objetivo:"objetivo-bogota",
            grupo: "Incidencia Bogota"

        },
        cali:{
            name:"Cali",
            objetivo:"objetivo-cali",
            grupo: "Incidencia cali"

        },
        cucuta:{
            name:"Cucuta",
            objetivo:"objetivo-Cucuta",
            grupo: "Incidencia Cucuta"

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
                    <h1 className="title mt-6 has-text-weight-light has-text-white has-text-centered is-size-1 is-uppercase">Planes de incidencia</h1>
                    <p className="title has-text-white has-text-centered is-size-5">DogeCoin buying growth hacker. Python-learning destitute growth hacker. Microdosing CryptoPunk rationalist. Ryan Hoover-funded weird European NFT startup. SPAC leading Testflight user. Substack blogging Thiel Fellow dropout. </p>
                    <p className="title has-text-white has-text-centered is-size-5">
                    Generalist-reading secondary markets buyer. LTV/CAC focused mentally exhausted startup founders. Snapchat-based GPT-3 written poetry. Doc-sending, TAM boosted IPO leading founder. Satoshi themed Macbook air apologist.</p>
                    <p className="title has-text-white has-text-centered is-size-5">
                    Javascript writing capital markets. Out of touch, ad buying venture investor. Consumer Social underground crypto newsletter. Tragically market capped Bitcoin miner. Accredited investor software engineer.</p>
                </div>
                <div className="container py-6-desktop  px-6-desktop px-3">
                    <h1 className="has-text-weight-light title has-text-white has-text-centered is-size-2 is-uppercase">Donde actuamos</h1>
                    <div className="my-3 is-flex is-justify-content-space-evenly">
                        <button onClick={()=>handleOnclick('cali')}className="button is-normal is-warning is-outlined">Cali</button>
                        <button onClick={()=>handleOnclick('cucuta')}className="button is-normal is-warning is-outlined">Cùcuta</button>
                        <button onClick={()=>handleOnclick('bogota')}className="button is-normal is-warning is-outlined">Bogotà</button>
                    </div>
                    <div></div>
                    <h3 className="has-text-primary is-size-4">Grupo:< span className="mt-3 has-text-white">{placeObject[place].grupo}</span> </h3>
                    <h3 className="mt-6 has-text-primary has-text-centered is-size-4">Objetivo</h3>
                    <p className="has-text-centered has-text-white">{placeObject[place].objetivo}</p>
                </div>
               
            </section>
            
            
            
        </main>
    )
}

export default PlanesDeIncidencia