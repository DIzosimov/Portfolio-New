import React from 'react'

import { NavLink } from 'react-router-dom'
import './intro.css'
import './characters.css'

import { ReactComponent as Circle } from '../../Assets/svgs/circles.svg'

const Intro = () => {
  let string = 'WELCOME TO THE PORTFOLIO OF'
  let splitString = string.split(' ')
  let nameStr = 'DAVID IZOSIMOV WEB DEVELOPER FROM SWEDEN'
  let splitNameStr = nameStr.split(' ')
  let prev = 0

  const characterSplit = (e, str) => {
    return (
      str[e].split('').map(letter => {
        if (str[e].indexOf(letter) !== prev) {
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
            <div className='first-line'>{characterSplit(0, splitString)}</div>
            <div className='second-line'>{characterSplit(1, splitString)}</div>
            <div className='third-line'>{characterSplit(2, splitString)}</div>
            <div className='fourth-line'>{characterSplit(3, splitString)}</div>
            <div className='fifth-line'>{characterSplit(4, splitString)}</div>
          </div>
          <div className='welcome-center'>
            <Circle />
          </div>
          <div className='welcome-right'>
            <div className='first-line-right'>{characterSplit(0, splitNameStr)}</div>
            <div className='second-line-right'>{characterSplit(1, splitNameStr)}</div>
            <div className='third-line-right'>{characterSplit(2, splitNameStr)}</div>
            <div className='fourth-line-right'>{characterSplit(3, splitNameStr)}</div>
            <div className='fifth-line-right'>{characterSplit(4, splitNameStr)}</div>
            <div className='sixth-line-right'>{characterSplit(5, splitNameStr)}</div>
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
