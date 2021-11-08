import React from "react"
import "./styles.scss"
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import BreadcrumbItem from '../components/breadcrumb/item'
import artemisas from "./assets/artemisas.png"
import center_for_global_development from "./assets/center_for_global_development.png"
import otraparte from "./assets/otraparte.png"
import el_derecho_a_no_obedecer from "./assets/el_derecho_a_no_obedecer.png"
import kas from './assets/kas.png'

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
                <h2 className="title vertical-title-desktop organizaciones   is-size-2-desktop has-text-primary is-uppercase">Quiénes Somos</h2>
                <div className="container has-text-left py-6-desktop ml-6-desktop pl-6-desktop">
                  <h3 className="title has-text-primary is-size-5">¿Qué es Constelaciones?</h3>
                  <p className="has-text-white">Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes. Estas mujeres migrantes son una representación de la resiliencia y la motivación por garantizar los derechos de los y las migrantes.Esta iniciativa es relizada en el marco del proyecto Escuelita Tu Bandera es Mi Bandera, un proyecto colectivo realizado por Fundación Artemisas y el Derecho a No Obedecer, La Fundación Konrad Adenauer y el Centro para el Desarrollo Global (Center for Global Development) en donde fortalecimos las capacidades de participación e incidencia ciudadana, de lideresas de organizaciones migrantes y de las comunidades de acogida de Cali, Bogotá y Cúcuta.</p>
                  <h3 className="title has-text-primary is-size-5 mt-6">Artemisas</h3>
                  <p className="has-text-white">La Fundación Artemisas es una organización colombiana que surge en 2017 con la ejecución de un proyecto productivo llevado a cabo en el centro residencial Plaza de la Hoja de Bogotá D.C.; con esta iniciativa logramos trabajar con mujeres víctimas del conflicto armado propendiendo por su autonomía económica. En 2020 nos reactivamos bajo el contexto de la pandemia por COVID-19 entendiendo la necesidad de articularnos como ciudadanía y sociedad civil para hacerle frente a la peor crisis social y económica de la historia reciente. Nos conectamos con organizaciones del ecosistema cívico para articular procesos de incidencia política, apostarle a la formación en género y feminismos y fortalecer los sistemas democráticos de la región latinoamericana.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">Derecho a No Obedecer</h3>
                  <p className="has-text-white">Somos una plataforma de iniciativas ciudadanas para explorar nuevas formas de participación desde la desobediencia. Buscamos experiencias, herramientas, y desarrollamos proyectos en diferentes ciudades de Colombia, para experimentar alrededor de procesos de participación activa que nos permitan tener más influencia en proyectos de ciudad. No tenemos ningún interés en la política electoral.</p>
                  <p className="has-text-white">Estamos presentes en Bogotá, Cali, Cúcuta y Medellín, y tenemos especial interés en algunos temas: participación ciudadana, convivencia y seguridad, calidad del aire, migración.</p>
                  <p className="has-text-white">Nos inspiramos en la obra del filósofo colombiano Fernando González, y el nombre de este proyecto es tomado de su tesis de grado: “El Derecho a No Obedecer”.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">Corporación Otra Parte</h3>
                  <p className="has-text-white">La Corporación Fernando González – Otraparte fue creada el 10 de abril de 2002 por iniciativa de Simón González Restrepo, hijo menor del pensador y ex gobernante de las islas de San Andrés, Providencia y Santa Catalina. Los objetivos principales de la entidad son difundir y preservar el legado del escritor Fernando González Ochoa, convertir la Casa Museo Otraparte en un centro cultural con proyección internacional y preservar el área como parque y jardín para beneficio de la comunidad y la protección del medio ambiente. De esta manera, el proyecto Parque Cultural Otraparte surge como un clamor para que Colombia se reencuentre con el mensaje y la filosofía de Fernando González, tan inédito todavía, tan desconocido todavía, pero siempre tan inquietante y provocador, porque en Otraparte late y habita, y no se apaga ni extingue, el corazón del caminante envigadeño.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">KAS</h3>
                  <p className="has-text-white">La Fundación Konrad Adenauer es una fundación política alemana allegada a la Unión Demócrata Cristiana (CDU) con presencia en más de 120 países que trabaja bajo los principios de libertad, justicia y solidaridad. Llegó a Colombia hace más de 55 años donde su principal objetivo es el fortalecimiento de la democracia; así como el fomento del estado de derecho y la economía social de mercado. Junto con diferentes socios, también promueve la construcción de paz y la integración de la población migrante em la sociedad. De la misma forma, apoya el diálogo continuo entre diferentes actores políticos; así como el intercambio entre diferentes culturas y religiones.</p>
                  <h3 className="title has-text-primary is-size-5 mt-4">CGD</h3>
                  <p className="has-text-white">El Centro para el Desarrollo Global trabaja para reducir la pobreza global y mejorar vidas a través de una investigación económica innovadora que impulsa mejores políticas y prácticas por parte de los principales tomadores de decisiones del mundo.</p>
                  <div className="mt-6 pt-6 has-text-centered is-flex-desktop is-align-items-center	is-justify-content-space-between">
                    <img
                          src={artemisas}
                          alt='Artemisas'
                          width='140'
                      />
                      <img
                          src={el_derecho_a_no_obedecer}
                          alt='El derecho a no obedecer'
                          width='240'
                      />
                      <img
                          src={otraparte}
                          alt='otraparte'
                          width='160'
                      />
                      <img
                          src={center_for_global_development}
                          alt='Center for global development'
                          width='140'
                          className='mr-6'
                      />
                       <img
                          src={kas}
                          alt='KAS'
                          width='160'
                      />
                    </div>
                </div>
            </div>
          </section>
      </main>
    )
  }
  
  export default QuienesSomos