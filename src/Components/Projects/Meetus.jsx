import React, { useEffect } from 'react'
import generalStyle from '../Styles/General.module.css'

export const Meetus = () => {

    return (
        <>
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
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">MySQL</span>
                        <span className="tag is-danger">
                            <i class="bi bi-database-fill"></i>
                        </span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">Bulma CSS</span>
                        <span className="tag is-light">
                            <span className="icon is-small" >
                                <img src="/icons/bulma.png" alt="" style={{ height: '12px' }} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <p >Ofrece una experiencia interactiva de chat en tiempo real utilizando sockets. La plataforma permite a los usuarios conectarse instantáneamente y participar en conversaciones grupales o individuales.</p>
        </>
    )
}
