import React from 'react'
import { Meetus } from './Projects/Meetus'

export const Projects = () => {
    return (
        <div id='projects'>
            <div className="columns is-centered is-vcentered">
                <div className="column is-two-thirds">
                    <hr className="divider" />
                    <br />
                    <p className="subtitle has-text-white">Proyectos</p>
                    <div className="box">
                        <Meetus />

                    </div>
                </div>
            </div>
        </div>
    )
}
