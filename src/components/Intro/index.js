import React from 'react'

import { NavLink } from 'react-router-dom'
import './intro.css'
import './characters.css'

const Intro = () => {
  let string = 'WELCOME TO THE PORTFOLIO OF'
  let splitString = string.split(' ')
  let prev = 0

  const jacob = e => {
    return (
      splitString[e].split('').map(letter => {
        if (splitString[e].indexOf(letter) !== prev) {
          prev++
        }
        return <span key={prev} id={`ch${prev}`} data-aos='fade-in' data-aos-delay={prev % 2 === 0 ? `${50+(prev*100)}` : `${50+(prev*50)}`}>{letter}</span>
      })
    )
  }

  return (
    <>
      <div id='intro-container'>
        <div className='welcome-container'>
          <div className='welcome-left'>
            <div className='first-line'>{jacob(0)}</div>
            <div className='second-line'>{jacob(1)}</div>
            <div className='third-line'>{jacob(2)}</div>
            <div className='fourth-line'>{jacob(3)}</div>
            <div className='fifth-line'>{jacob(4)}</div>
          </div>
        </div>
        <div className='about-container'>
          <NavLink to='/about' className='about'>
            <h1 data-aos='fade-up' data-aos-delay='500'>About</h1>
          </NavLink>
        </div>
        <div className='projects-container'>
          <NavLink to='/projects' className='projects'>
            <h1 data-aos-anchor-placement='top' data-aos='fade-up' data-aos-delay='400'>Projects</h1>
          </NavLink>
        </div>
        <div className='contact-container'>
          <NavLink to='/contact' className='contact'>
            <h1 data-aos='fade-up' data-aos-delay='300'>Contact</h1>
          </NavLink>
        </div>
        <div className='cv-container'>
          <NavLink to='/cv' className='cv'>
            <h1 data-aos='fade-down' data-aos-delay='200'>Curriculum Vitae</h1>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Intro
