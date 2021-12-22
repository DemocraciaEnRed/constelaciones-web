import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
       <title>CONSTELACIONES DE INCIDENCIA</title>
      <meta name="title" content="CONSTELACIONES DE INCIDENCIA"/>
      <meta name="description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://constelaciones.co/"/>
      <meta property="og:title" content="CONSTELACIONES
      DE INCIDENCIA"/>
      <meta property="og:description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>
      <meta property="og:image" content="https://constelaciones.co/share.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://constelaciones.co/"/>
      <meta property="twitter:title" content="CONSTELACIONES
      DE INCIDENCIA"/>
      <meta property="twitter:description" content="Constelaciones es una apuesta para visibilizar los liderazgos de mujeres migrantes y organizaciones sociales que trabajan con migrantes"/>
      <meta property="twitter:image" content="https://constelaciones.co/share.png"/>
    </Helmet>
  );
};
export default Seo;
