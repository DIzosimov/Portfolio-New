import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import './intro.scss'
import './outro.css'

const Intro = () => {
  let string = 'WELCOME TO THE PORTFOLIO OF'
  let splitString = string.split(' ')
  let nameStr = 'DAVID IZOSIMOV WEB DEVELOPER FROM SWEDEN'
  let splitNameStr = nameStr.split(' ')
  let prev = 0

  useEffect(() => {
    neonSign()

    return () => {
      outro()
    }
  }, [])

  const characterSplit = (e, str, bool) => {
    let animation = 'flip-left'
    if (bool) animation = 'flip-up'
    return (
      str[e].split('').map(letter => {
        if (str[e].indexOf(letter) !== prev) {
          prev++
        }
        return <span key={prev} id={`ch${prev}`} data-aos={`${animation}`} data-aos-delay={`${(prev*100)}`}>{letter}</span>
      })
    )
  }

  const neonSign = () => {
    const signs = document.querySelectorAll('span')

    const randomIn = (min, max) => (
      Math.floor(Math.random() * (max - min + 1) + min)
    )

    const mixupInterval = el => {
      const ms = randomIn(2000, 4000)
      el.style.setProperty('--interval', `${ms}ms`)
    } 

    signs.forEach(el => {
      mixupInterval(el)
      el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el)
      })
    })
  }

  const outro = () => {
    return <div className='slideOut' />
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
          <div className='welcome-right'>
            <div className='first-line-right'>{characterSplit(0, splitNameStr, true)}  {characterSplit(1, splitNameStr, true)}</div>
            <div className='third-line-right'>{characterSplit(2, splitNameStr, true)}</div>
            <div className='fourth-line-right'>{characterSplit(3, splitNameStr, true)}</div>
            <div className='fifth-line-right'>{characterSplit(4, splitNameStr, true)}</div>
            <div className='sixth-line-right'>{characterSplit(5, splitNameStr, true)}</div>
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
          <NavLink to='/blog' className='cv'>
            <h1 data-aos='fade-down' data-aos-delay='200'>News Blog</h1>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Intro
