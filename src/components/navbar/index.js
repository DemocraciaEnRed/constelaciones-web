import React, { useState } from "react"
import logo from "../../pages/assets/logo-constelaciones.svg"
import "./styles.scss"

const Navbar = () => {
    const [isActive, setisActive] = useState(false)

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item'>
                    <img
                        src={logo}
                        alt='Logo'
                        width='40'
                    />
                </a>
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
                <a href='/' className='navbar-item'>
                Home
                </a>
                <a href='/mujeres' className='navbar-item'>
                Mujeres
                </a>
                <a href='/' className='navbar-item'>
                Quienes somos
                </a>
                <a href='/organizaciones' className='navbar-item'>
                Organizaciones
                </a>
            </div>
        </div>
        </nav>
    )
};

export default Navbar;
