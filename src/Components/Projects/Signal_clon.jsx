import React from 'react'
import generalStyle from '../Styles/General.module.css'

export const Signal_clon = () => {
    return (
        <div className="columns is-vcentered">
            <div className="column is-half">
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
                            <span className="tag is-dark">Bulma CSS</span>
                            <span className="tag is-light">
                                <span className="icon is-small" >
                                    <img src="/icons/bulma.png" alt="" style={{ height: '12px' }} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <br />
                <p className='has-text-weight-light'>Plantilla basada en la página web de Signal, desarrollado utilizando principalmente el framework BulmaCSS para lograr el diseño resultante.</p>
            </div>

            <div className="column ">

                <figure className="image is-16by9">
                    <img className={`${generalStyle.border}`} src="/signal/main.png" alt="" />
                </figure>

            </div>
        </div>
    )
}
