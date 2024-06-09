import React, { useEffect } from 'react'
import Aos from 'aos'

export const Skills = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div id='skills'>
      <div className="columns is-centered is-vcentered">
        <div className="column is-10">
          <h2 className="subtitle is-size-3">HABILIDADES</h2>
          <div className="fixed-grid has-4-cols-desktop has-2-cols-mobile">
            <div className="grid">
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/html.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>HTML</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/css.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>CSS</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/js.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>Javascript</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/mysql.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>MySQL</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/node.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>Node JS</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/react.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>React</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/github.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>Github</span>
                </div>
              </div>
              <div className="cell">
                <div className="box" data-aos="fade-up">
                  <span className='icon-text mr-3'>
                    <img className='icon' src="./icons/python.png" alt="" />
                  </span>
                  <span className='has-text-weight-light'>Python</span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
