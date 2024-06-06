import React from 'react'

export const Contacto = () => {
    return (
        <div id='contacto'>
            <div className='columns is-centered is-vcentered'>
                <div className="column is-two-thirds">
                    <div className="fixed-grid has-auto-count">
                        <div className="grid">
                            <div className="cell">
                                <a className="box has-text-centered" href='https://github.com/angellof18' target='_blank'>
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
                    <br />
                </div>
            </div>
        </div>
    )
}
