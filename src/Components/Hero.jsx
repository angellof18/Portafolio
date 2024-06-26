import React from 'react'
import imageStyle from './Styles/General.module.css'

export const Hero = () => {

    return (
        <div>
            <div className='hero is-medium'>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="columns is-vcentered">
                                    <div className="column is-one-third is-hidden-mobile">
                                        <figure className='image'>
                                            <img className={`animate__animated animate__fadeInUp animate__faster ${imageStyle.circle}`} src="./avatar.png" alt="" />
                                        </figure>
                                    </div>

                                    <div className="column is-two-thirds">
                                        <div className="fixed-grid has-12-cols is-hidden-desktop is-hidden-tablet is-hidden-widescreen is-hidden-fullhd">
                                            <div className="grid">
                                                <div className="cell">
                                                    <figure className={`image is-96x96 ${imageStyle.circle}`}>
                                                        <img src="/avatar.png" alt="" className="is-rounded" />
                                                    </figure>
                                                </div>
                                                <div className="cell is-col-span-11">
                                                    <span class="tag is-rounded is-success">Disponible para trabajar</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="tag is-rounded is-success is-hidden-mobile">Disponible para trabajar</span>
                                            <h1 className='title is-size-1 has-text-black animate__animated animate__faster animate__fadeInUp'>Angel Arteaga</h1>
                                            <h2 className='subtitle is-size-3 has-text-link animate__animated animate__faster animate__fadeInUp'>Desarrollador Web</h2>
                                            <p className='is-size-6'>Soy un joven entusiasta de la tecnología y un apasionado de la programación web. Desde que me adentré en el mundo de la creación digital, he estado inmerso en el desarrollo web, explorando sus múltiples facetas y siempre desafiando mis habilidades.</p>

                                            <button className={`button is-link mt-6 ${imageStyle.button}`}
                                                onClick={() => window.open('/cv.pdf', '_blank')}>
                                                <span className="icon is-small">
                                                    <i class="bi bi-box-arrow-down"></i>
                                                </span>
                                                <span>Descargar CV</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
