import React from 'react'

import { NavLink } from 'react-router-dom'
import './intro.css'

const Intro = () => {

  return (
    <>
      <div id='intro-container'>
        <div className='about-container'>
          <NavLink to='/about' className='about'>
            <h1 data-aos='fade-up'>About</h1>
          </NavLink>
        </div>
        <div className='projects-container'>
          <NavLink to='/projects' className='projects'>
            <h1 data-aos-anchor-placement='top' data-aos='fade-up'>Projects</h1>
          </NavLink>
        </div>
        <div className='contact-container'>
          <NavLink to='/contact' className='contact'>
            <h1 data-aos='fade-up'>Contact</h1>
          </NavLink>
        </div>
        <div className='cv-container'>
          <NavLink to='/cv' className='cv'>
            <h1 data-aos='fade-down'>Curriculum Vitae</h1>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Intro
