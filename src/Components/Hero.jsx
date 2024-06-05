import React from 'react'
import styles from '../Styles/Hero.module.css'
import { Navbar } from './Navbar'

export const Hero = () => {
    return (
        <div>
            <div className={`${styles.hero} hero is-fullheight`}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="columns is-centered is-vcentered">
                                    <div className="column is-one-third">
                                        <figure className="image">
                                            <img src="./avatar1.png" alt="" />
                                        </figure>
                                    </div>
                                    <div className="column is-two-thirds">
                                        <p className="title is-size-1 has-text-light">Angel Arteaga</p>
                                        <p className="subtitle is-size-3 has-text-info">Desarrollador Web</p>
                                        <p className='is-size-6 has-text-light'>Transformando ideas en realidad a traves de codigo.</p>

                                        <button className="button is-info is-rounded is-outlined mt-6">Descargar CV</button>
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
