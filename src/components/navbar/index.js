import React, { useState } from "react"
import logo from "../../pages/assets/logo-constelaciones.svg"
import { Link } from 'gatsby'
import "./styles.scss"

const Navbar = () => {
    const [isActive, setisActive] = useState(false)

    function stopMusic() {
        if(window.theSong){
            window.musicPlaying = false
            window.theSong.pause()
        }
    }

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link to='/home' className='navbar-item'>
                    <img
                        src={logo}
                        alt='Logo'
                        width='40'
                    />
                </Link>
                <a
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role='button'
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
                <p className="title is-6">CONSTELACIONES DE INCIDENCIA</p>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className='navbar-item navbar-item-wrapper'>
                <Link to='/' className='navbar-item'>
                Home
                </Link>
                <Link to='/mujeres' className='navbar-item'>
                Mujeres
                </Link>
                <Link to='/quienes-somos' className='navbar-item'>
                Quiénes somos
                </Link>
                <Link to='/organizaciones' className='navbar-item'>
                Organizaciones
                </Link>
                <Link to='/planes-de-incidencia' className='navbar-item'>
                Planes de incidencia
                </Link>
                {/* {
                    window.musicPlaying && 
                    <a onClick={stopMusic} className="navbar-item">
                        Silenciar musica
                    </a>
                } */}
            </div>
        </div>
        </nav>
    )
};

export default Navbar;
