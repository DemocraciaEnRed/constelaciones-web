import React, { useState, useEffect } from "react"
import Particles from "react-tsparticles";
import configDesktop from "./config.desktop.json";
import configMobile from "./config.mobile.json";

const Constelaciones = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  return (
        <>
          {width >= 768 ?
            <Particles options={configDesktop}/>
          :
            <Particles options={configMobile}/>
          }
        </>
    )
}

export default Constelaciones
