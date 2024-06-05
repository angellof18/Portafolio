import React from 'react'

export const Skills = () => {
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-two-thirds">
        <hr className="divider" />
        <p className="subtitle">Skills</p>
        <div className="fixed-grid has-auto-count">
          <div className="grid">
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/html.png" alt="" />
                </span>
                <span className='has-text-weight-light'>HTML</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/css.png" alt="" />
                </span>
                <span className='has-text-weight-light'>CSS</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/js.png" alt="" />
                </span>
                <span className='has-text-weight-light'>Javascript</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/mysql.png" alt="" />
                </span>
                <span className='has-text-weight-light'>MySQL</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/node.png" alt="" />
                </span>
                <span className='has-text-weight-light'>Node JS</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/react.png" alt="" />
                </span>
                <span className='has-text-weight-light'>React</span>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <span className='icon-text mr-3'>
                  <img className='icon' src="./icons/github.png" alt="" />
                </span>
                <span className='has-text-weight-light'>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
