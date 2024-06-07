import React from 'react'
import { Contacto } from './Contacto'


export const Footer = () => {

  return (
    <footer className="footer has-text-centered">
      <div className="columns">
        <div className="column is-two-thirds">

          <form action="https://formsubmit.co/5782711d06bfc79dab966069f374f92c" method='POST' className="form">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nombre</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input type="text" placeholder='Nombre' className="input" name='name'required/>
                    <span className="icon is-small is-left">
                      <i className="bi bi-people-fill"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Correo</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control has-icons-left is-expanded">
                    <input type="email" placeholder='Correo' className="input" name='email' required/>
                    <span className="icon is-small is-left">
                      <i className="bi bi-at"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Asunto</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input type="text" placeholder='Asunto' className="input" name='subject' required/>
                    <span className="icon is-small is-left">
                      <i className="bi bi-bookmark-fill"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Descripcion</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea className='textarea' placeholder='Mensaje' name='comments' required></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label"></div>
              <div className="field-body">
                <div className="field">
                  <div className="control has-text-left">
                    <button type='submit' className="button is-info is-outlined">
                      <span className="icon">
                        <i className="bi bi-send-fill"></i>
                      </span>
                      <span className='ml-3'>Enviar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <input type="hidden" name='_captcha' value={'false'}/>
          </form>

        </div>
        
        <div className="column">
          <Contacto />
        </div>
      </div>
      <br />
      <hr className="divider" />
      <p>Pagina elaborada por <strong>Angel Yahir Arteaga Rodriguez</strong> @ <time dateTime="2024-06-05">2024</time></p>
      <br />
    </footer>
  )
}
