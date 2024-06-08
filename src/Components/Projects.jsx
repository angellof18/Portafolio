import React, { useEffect } from 'react'
import Aos from 'aos'
import { Meetus } from './Projects/Meetus'
import { Signal_clon } from './Projects/Signal_clon'
//import { DividerWithArrow } from './DividerWithArrow'

export const Projects = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id='projects'>
            <div className="columns is-centered is-vcentered">
                <div className="column is-four-fifths">
                    <br />
                    <p className="subtitle has-text-white">PROYECTOS</p>
                    <div className="box" data-aos="zoom-in">
                        <div className="container">
                            <div className="hero">
                                <header className="hero-head">
                                    <p>MEETUS</p>
                                </header>
                                <main className="hero-body">
                                    <Meetus />
                                </main>
                                <footer className="hero-foot">
                                    <div className="buttons">
                                        <a className="button is-info is-outlined" href='https://meetus-d2da.onrender.com' target='_blank'>
                                            <span icon>
                                                <i className="bi bi-globe"></i>
                                            </span>
                                            <span className='ml-3'>Demostracion</span>
                                        </a>
                                        <a className="button is-info is-outlined" href='https://github.com/angellof18/Meetus' target='_blank'>
                                            <span icon>
                                                <i className="bi bi-git"></i>
                                            </span>
                                            <span className='ml-3'>Repositorio</span>
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <div className="container">
                            <div className="hero">
                                <header className="hero-head">
                                    <p>SIGNAL (CLON)</p>
                                </header>
                                <main className="hero-body">
                                    <Signal_clon />
                                </main>
                                <footer className="hero-foot">
                                    <div className="buttons">
                                        <a className="button is-info is-outlined" href='https://signal-clon.onrender.com/' target='_blank'>
                                            <span icon>
                                                <i className="bi bi-globe"></i>
                                            </span>
                                            <span className='ml-3'>Demostracion</span>
                                        </a>
                                        <a className="button is-info is-outlined" href='https://github.com/angellof18/Signal_clon' target='_blank'>
                                            <span icon>
                                                <i className="bi bi-git"></i>
                                            </span>
                                            <span className='ml-3'>Repositorio</span>
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    {/*<DividerWithArrow/>*/}
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}
