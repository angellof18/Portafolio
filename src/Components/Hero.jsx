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
                                        <figure className='image animate__animated animate__faster animate__fadeInUp'>
                                            <img src="./avatar.png" alt="" />
                                        </figure>
                                    </div>

                                    <div className="column is-two-thirds">
                                        <div className="fixed-grid has-12-cols is-hidden-desktop">
                                            <div className="grid">
                                                <div className="cell">
                                                    <figure className={`image is-96x96 ${imageStyle.circle}`}>
                                                        <img src="/avatar.png" alt="" className="is-rounded" />
                                                    </figure>
                                                </div>
                                                <div className="cell is-col-span-11">
                                                    <span class="tag is-rounded is-medium is-success">Disponible para trabajar</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='title is-size-1 has-text-black animate__animated animate__faster animate__fadeInUp'>Angel Arteaga</p>
                                            <p className='subtitle is-size-3 has-text-link animate__animated animate__faster animate__fadeInUp'>Desarrollador Web</p>
                                            <p className='is-size-6'>Soy un joven entusiasta de la tecnología y un apasionado de la programación web. Desde que me adentré en el mundo de la creación digital, he estado inmerso en el desarrollo web, explorando sus múltiples facetas y siempre desafiando mis habilidades.</p>

                                            <button className="button is-link mt-6"
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
