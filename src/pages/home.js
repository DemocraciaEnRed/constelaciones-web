import React, { useState, useEffect } from "react"
import logo from "./assets/logo-constelaciones.svg"
import bgestrellas from "./assets/bg-estrellas.gif"
import "./styles.scss"
import Navbar from '../components/navbar'
import { CSSTransition } from 'react-transition-group';
import { useMujeresData } from '../hooks/useMujeresData'
import Particle from '../components/particle';
import {navigate} from 'gatsby'

const IndexPage = () => {
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState(true);
  const [slide, setSlide] = useState(0);

  const skipIntro = () => {
    setIntro(false);
    // sessionStorage.setItem('introConstelaciones', true);
  }

  useEffect(() => {
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
    console.log('is mobile', isMobile)
    if(!isMobile) {
     
      if(!window.musicPlayed){
        console.log('play music');
        window.theSong = (new Audio('/assets/intro-music.mp3'));
        window.theSong.volume = 0.05;
        window.theSong.play()
        .then(() => {
          console.log('music played');
          window.musicPlaying = true
          window.musicPlayed = true;
        }).catch( () => {
          navigate('/')
        });
        // let theMusic = (new Audio('/assets/intro-music.mp3'));
        // // set the volume of theMusic to 0.5
        // theMusic.volume = 0.1;
        // play the music
        // theMusic.play()
        // .then(() => {
        //   console.log('music played');
        //   window.musicPlayed = true;
        // }).catch( () => {
        //   navigate('/')
        // });
      } else {
        console.log('music already played')
      }
    }
    // setLoading(false)
    // get from the URL the query param named intro
    const urlParams = new URLSearchParams(window.location.search);
    const needsIntro = urlParams.get('intro');

    // const needsIntro = 
    // const needsIntro = false
    if (needsIntro) {
      setTimeout(() => {
        if (intro) {
          setSlide(1);
        }
      }, 3000)
      setTimeout(() => {
        if (intro) {
          setSlide(2);
        }
      }, 9000)
      setTimeout(() => {
        if (intro) {
          skipIntro()
        }
      }, 12500)
    } else {
      setIntro(false);
    }
   
  }, [])


  const mujeresData = useMujeresData()
  return (
    <main>
      <title>CONSTELACIONES DE INCIDENCIA</title>
      {!loading ? (
        <>
          <CSSTransition
          in={!intro}
          timeout={500}
          classNames="navbar"
          unmountOnExit
        >
          <>
          <section className="hero is-fullheight bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <Navbar />
            <Particle mujeres={mujeresData} />
            
          </section>
          </>
        </CSSTransition>
        {intro && 
        <section className="hero is-fullheight">
          {slide === 0 && 
            <div className="hero-body is-justify-content-center main-logo bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
              <img src={logo} className="image" width={150}/>
              <h1 className="title is-2 ml-3 has-text-left">CONSTELACIONES<br/>DE INCIDENCIA</h1>
            </div>
          </div>
          }
          {slide === 1 && 
            <div className="hero-body is-justify-content-center bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            <h2 className="title has-text-centered title-intro has-text-weight-light	">
              Constelaciones es una apuesta para 
              <br />
              <span className="has-text-primary has-text-weight-light	">visibilizar los liderazgos de mujeres migrantes y organizaciones sociales</span>
              <br />
              que trabajan con migrantes.
            </h2>
          </div>
          }
          { slide === 2 &&
            <div className="hero-body is-justify-content-center bg-estrellas" style={{backgroundImage: `url(${bgestrellas})`}}>
            {/* <h3 className="title has-text-centered px-6 mx-6 title-intro">
            Esta iniciativa es realizada en el marco del proyecto Escuelita Tu Bandera es Mi Bandera, un proyecto colectivo realizado por Fundación Artemisas y el Derecho a No Obedecer, La Fundación Konrad Adenauer y el Centro para el Desarrollo Global (Center for Global Development) en donde fortalecimos las capacidades de participación e incidencia ciudadana, de lideresas de organizaciones migrantes y de las comunidades de acogida de Cali, Bogotá y Cúcuta.
            </h3> */}
            <h3 className="title has-text-centered px-6 mx-6 title-intro has-text-weight-light">Haz click en las estrellas para conocer historias de lideresas</h3>
          </div>
          }
          {/* <button className="button skip-intro is-primary" onClick={skipIntro}>Saltar intro</button> */}
        </section>
        }
        </>
      ) : null
      }
     
    </main>
  )
}

export default IndexPage
