import React, { useEffect } from 'react'
import Aos from 'aos'
import { Meetus } from './Projects/Meetus'
import { Signal_clon } from './Projects/Signal_clon'
import styles from './Styles/General.module.css'
//import { DividerWithArrow } from './DividerWithArrow'

export const Projects = () => {
    useEffect(() => {
        Aos.init({"once":true})
    }, [])

    return (
        <div id='projects'>
            <div className="columns is-centered is-vcentered">
                <div className="column is-10">
                    <br />
                    <p className="subtitle is-size-3">PROYECTOS</p>


                    <div className="columns is-vcentered">
                        <div className="column is-7" data-aos="fade-right">
                            <figure className='image'>
                                <img className={styles.border} src="/meetus/main.png" alt="" />
                            </figure>
                        </div>
                        <div className="column" data-aos="fade-left">
                            <p className='is-size-5 has-text-weight-bold'>MEETUS - chat utilizando Socket.io</p>
                            <br />
                            <Meetus />
                            <br />
                            <div className="buttons">
                                <a className="button is-link" href='https://meetus-d2da.onrender.com' target='_blank'>
                                    <span icon>
                                        <i className="bi bi-globe"></i>
                                    </span>
                                    <span className='ml-3'>Demostracion</span>
                                </a>
                                <a className="button is-link is-outlined" href='https://github.com/angellof18/Meetus' target='_blank'>
                                    <span icon>
                                        <i className="bi bi-git"></i>
                                    </span>
                                    <span className='ml-3'>Repositorio</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <br /><br /><br />

                    <div className="columns is-vcentered">
                        <div className="column is-7 is-hidden-desktop" data-aos="fade-left">
                            <figure className='image'>
                                <img className={styles.border} src="/signal/main.png" alt="" />
                            </figure>
                        </div>
                        <div className="column" data-aos="fade-right">
                            <p className='is-size-5 has-text-weight-bold'>SIGNAL (clon) - plantilla basada en la pagina web de Signal</p>
                            <br />
                            <Signal_clon />
                            <br />
                            <div className="buttons">
                                <a className="button is-link" href='https://signal-clon.onrender.com' target='_blank'>
                                    <span icon>
                                        <i className="bi bi-globe"></i>
                                    </span>
                                    <span className='ml-3'>Demostracion</span>
                                </a>
                                <a className="button is-link is-outlined" href='https://github.com/angellof18/Signal_clon' target='_blank'>
                                    <span icon>
                                        <i className="bi bi-git"></i>
                                    </span>
                                    <span className='ml-3'>Repositorio</span>
                                </a>
                            </div>
                        </div>
                        <div className="column is-7 is-hidden-mobile" data-aos="fade-left">
                            <figure className='image'>
                                <img className={styles.border} src="/signal/main.png" alt="" />
                            </figure>
                        </div>
                    </div>

                    {/*<DividerWithArrow/>*/}
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}
