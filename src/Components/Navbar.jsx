import React, { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    return (
        <div>
            <nav className="navbar is-fixed-top is-transparent is-spaced has-shadow	is-black">
                <div className="navbar-brand">
                    <a className="navbar-item" href='#'>
                        <p className="subtitle is-size-4 has-text-info">PORTAFOLIO</p>
                    </a>

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
                        <a href="#projects" className="navbar-item">Proyectos</a>
                        <a href="#skills" className="navbar-item">Skills</a>
                        <a href="#contacto" className="navbar-item">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
