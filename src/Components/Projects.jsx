import React from 'react'
import { Meetus } from './Projects/Meetus'

export const Projects = () => {
    return (
        <div id='projects'>
            <div className="columns is-centered is-vcentered">
                <div className="column is-four-fifths">
                    <hr className="divider" />
                    <br />
                    <p className="subtitle has-text-white">Proyectos</p>
                    <div className="box">
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
                </div>
            </div>
        </div>
    )
}
