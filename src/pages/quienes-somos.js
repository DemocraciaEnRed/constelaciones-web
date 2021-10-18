import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import artemisas from "./assets/artemisas.png"
import avina from "./assets/avina.png"
import citi from "./assets/citi.png"
import violeta from "./assets/hojas-violeta.png"

const QuienesSomos = () => {
    return (
      <main>
        <title>Quiénes Somos - CONSTELACIONES DE INCIDENCIA</title>
          <Navbar />
          <section className="main-container py-6 hero is-fullheight">
            <div className="container is-fluid">
                <Breadcrumb>
                    <BreadcrumbItem text="Home" url="/" />
                    <BreadcrumbItem text="Quiénes Somos" url="/quienes-somos" isActive />
                </Breadcrumb>
                <h2 className="title vertical-title-desktop organizaciones is-family-secondary is-size-2-desktop has-text-primary is-uppercase">Quiénes Somos</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                  <h3 className="title has-text-primary is-size-5">Artemisas</h3>
                  <p className="has-text-white">La Fundación Artemisas es una organización colombiana que surge en 2017 con la ejecución de un proyecto productivo llevado a cabo en el centro residencial Plaza de la Hoja de Bogotá D.C.; con esta iniciativa logramos trabajar con mujeres víctimas del conflicto armado propendiendo por su autonomía económica. En 2020 nos reactivamos bajo el contexto de la pandemia por COVID-19 entendiendo la necesidad de articularnos como ciudadanía y sociedad civil para hacerle frente a la peor crisis social y económica de la historia reciente. Nos conectamos con organizaciones del ecosistema cívico para articular procesos de incidencia política, apostarle a la formación en género y feminismos y fortalecer los sistemas democráticos de la región latinoamericana.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">DANO</h3>
                  <p className="has-text-white">El Derecho a No Obedecer es una plataforma que propone, desarrolla y acompaña procesos de incidencia ciudadana para alcanzar mayores y mejores impactos en torno a cuatro temas de interés: movilización y protesta pacífica, crisis climática, migración, convivencia y seguridad. Esta plataforma pertenece a la Corporación Otraparte, que desde el año 2002 preserva y difunde la obra de Fernando González y que a través de El Derecho a No Obedecer retoma los postulados del filósofo colombiano proponiendo nuevas lecturas desde el activismo.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">KAS</h3>
                  <p className="has-text-white">La Fundación Konrad Adenauer es una fundación política alemana allegada a la Unión Demócrata Cristiana (CDU) con presencia en más de 120 países que trabaja bajo los principios de libertad, justicia y solidaridad. Llegó a Colombia hace más de 55 años donde su principal objetivo es el fortalecimiento de la democracia; así como el fomento del estado de derecho y la economía social de mercado. Junto con diferentes socios, también promueve la construcción de paz y la integración de la población migrante em la sociedad. De la misma forma, apoya el diálogo continuo entre diferentes actores políticos; así como el intercambio entre diferentes culturas y religiones.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">CGD</h3>
                  <p className="has-text-white">El Centro para el Desarrollo Global trabaja para reducir la pobreza global y mejorar vidas a través de una investigación económica innovadora que impulsa mejores políticas y prácticas por parte de los principales tomadores de decisiones del mundo.</p>
                  <h3 className="title has-text-primary is-size-5 mt-6">¿Qué es Constelaciones?</h3>
                  <p className="has-text-white">Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes. Esta iniciativa es realizada en el marco del proyecto Escuelita Tu Bandera es Mi Bandera, un proyecto colectivo realizado por Fundación Artemisas y el Derecho a No Obedecer, La Fundación Konrad Adenauer y el Centro para el Desarrollo Global (Center for Global Development) en donde fortalecimos las capacidades de participación e incidencia ciudadana, de lideresas de organizaciones migrantes y de las comunidades de acogida de Cali, Bogotá y Cúcuta.</p>
                  <h3 className="title has-text-primary is-size-5 mt-6">¿Por qué nos importan las lideresas?</h3>
                  <p className="has-text-white">Estas mujeres migrantes son una representación de la resiliencia y la motivación por garantizar los derechos de los y las migrantes. Conoce sus historias aquí</p>
                  <div className="mt-6 pt-6 has-text-centered">
                    <img
                          src={artemisas}
                          alt='Artemisas'
                          width='140'
                      />
                      <img
                          src={avina}
                          alt='avina'
                          width='140'
                      />
                      <img
                          src={citi}
                          alt='citi'
                          width='140'
                      />
                      <img
                          src={violeta}
                          alt='violeta'
                          width='140'
                      />
                    </div>
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default QuienesSomos