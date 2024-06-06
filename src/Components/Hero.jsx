import React from 'react'
import heroStyles from '../Styles/Hero.module.css'
import animationStyles from '../Styles/Animation.module.css'

export const Hero = () => {
    return (
        <div>
            <div className={`${heroStyles.hero} hero is-fullheight`}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-two-thirds">
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-one-third is-hidden-mobile">
                                        <figure className="image">
                                            <img src="./avatar1.png" alt="" />
                                        </figure>
                                    </div>
                                    <div className="column is-two-thirds">
                                        <div className="has-text-centered">
                                            <p className={`${animationStyles.animated} ${animationStyles.fadeInUp} title is-size-1 has-text-light`}>Angel Arteaga</p>
                                            <p className={`${animationStyles.animated} ${animationStyles.fadeInUp} subtitle is-size-3 has-text-info`}>Desarrollador Web</p>
                                            <p className='is-size-6 has-text-light has-text-weight-light'>Soy un joven entusiasta de la tecnología y un apasionado de la programación web. Desde que me adentré en el mundo de la creación digital, he estado inmerso en el desarrollo web, explorando sus múltiples facetas y siempre desafiando mis habilidades.</p>

                                            <button className="button is-info is-rounded is-outlined mt-6">Descargar CV</button>
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
