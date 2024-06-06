import bulmaCarousel from 'bulma-carousel';
import React, { useEffect } from 'react'

export const Meetus = () => {

    useEffect(() => {
        bulmaCarousel.attach('#carousel-demo', {
            slidesToScroll: 1,
            slidesToShow: 1
        });
    }, []);


    return (
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
                    <a className="button is-info is-outlined" href='https://meetus-d2da.onrender.com' target='_blank'>
                        <span icon>
                            <i className="bi bi-globe"></i>
                        </span>
                        <span className='ml-3'>Demostracion</span>
                    </a>
                    <a className="button is-info is-outlined" href='https://github.com/angellof18/Meetus' target='_blank'>
                        <span icon>
                            <i className="bi bi-git"></i>
                        </span>
                        <span className='ml-3'>Repositorio</span>
                    </a>
                </div>
            </div>

            <div className="column is-hidden-mobile">

                <section class="hero is-medium has-carousel">
                    <div id="carousel-demo" class="hero-carousel">
                        <div class="item-1">
                            <figure className="image is-16by9">
                                <img src="/meetus/login.png" alt="" />
                            </figure>
                        </div>
                        <div class="item-2">
                            <figure className="image is-16by9">
                                <img src="/meetus/main.png" alt="" />
                            </figure>
                        </div>
                        <div class="item-3">
                            <figure className="image is-16by9">
                                <img src="/meetus/chat.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div class="hero-head"></div>
                    <div class="hero-body"></div>
                    <div class="hero-foot"></div>
                </section>

            </div>
        </div>
    )
}
