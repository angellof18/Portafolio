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
                </div>
                <p className='has-text-weight-light'>Ofrece una experiencia interactiva de chat en tiempo real utilizando sockets. La plataforma permite a los usuarios conectarse instantáneamente y participar en conversaciones grupales o individuales.</p>
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
