import React, { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    return (
        <div>
            <nav className="navbar is-transparent is-spaced is-black">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <p className="subtitle is-size-4 has-text-info">PORTAFOLIO</p>
                    </div>

                    <a className={`navbar-burger ${active && 'is-active'}`}
                    onClick={handleActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={`navbar-menu ${active && 'is-active'}`}>
                    <div className="navbar-start">
                        <a href="#" className="navbar-item">Inicio</a>
                        <a href="#" className="navbar-item">Sobre mi</a>
                        <a href="#" className="navbar-item">Proyectos</a>
                        <a href="#" className="navbar-item">Skills</a>
                        <a href="#" className="navbar-item">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
