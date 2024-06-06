import React from 'react'

export const Projects = () => {
    return (
        <div>
            <div className="columns is-centered is-vcentered">
                <div className="column is-two-thirds">
                    <hr className="divider" />
                    <br />
                    <p className="subtitle has-text-white">Proyectos</p>
                    <div className="box">
                        <div className="columns is-vcentered">
                            <div className="column is-half">
                                <p>MEETUS</p>
                                <br />
                                <div className="field is-grouped is-grouped-multiline">
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <span className="tag is-dark">html</span>
                                            <span className="tag is-info">
                                                <i class="bi bi-filetype-html"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <span className="tag is-dark">css</span>
                                            <span className="tag is-success">
                                                <i class="bi bi-filetype-css"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <span className="tag is-dark">socket.io</span>
                                            <span className="tag is-warning">
                                                <i class="bi bi-lightning-charge-fill"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p>Ofrece una experiencia interactiva de chat en tiempo real utilizando sockets. La plataforma permite a los usuarios conectarse instantáneamente y participar en conversaciones grupales o individuales.</p>
                                <br />
                                <div className="buttons">
                                    <button className="button is-info is-outlined">
                                        <span icon>
                                            <i className="bi bi-globe"></i>
                                        </span>
                                        <span className='ml-3'>Demostracion</span>
                                    </button>
                                    <button className="button is-info is-outlined">
                                        <span icon>
                                            <i className="bi bi-git"></i>
                                        </span>
                                        <span className='ml-3'>Repositorio</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
