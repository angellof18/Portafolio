import React from 'react'

export const Contacto = () => {
    return (
        <div className='columns is-centered is-vcentered'>
            <div className="column is-two-thirds">
                <hr className="divider" />
                <p className="subtitle has-text-white">Contacto</p>
                <div className="fixed-grid has-auto-count">
                    <div className="grid">
                        <div className="cell">
                            <a className="box has-text-centered">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i class="bi bi-github"></i>
                                    </span>
                                    <span className='has-text-weight-light'>Github</span>
                                </span>
                            </a>
                        </div>
                        <div className="cell">
                            <a className="box has-text-centered">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i class="bi bi-linkedin"></i>
                                    </span>
                                    <span className='has-text-weight-light'>Linkedin</span>
                                </span>
                            </a>
                        </div>
                        <div className="cell">
                            <a className="box has-text-centered">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i class="bi bi-envelope-at-fill"></i>
                                    </span>
                                    <span className='has-text-weight-light'>Correo</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
