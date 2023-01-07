import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


import { ReactComponent as Square } from '../../Assets/svgs/square.svg'
import { ReactComponent as Loader } from '../../Assets/svgs/pacMan.svg' 
import styles from './styles.module.scss'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [timer, setTimer] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submited, setSubmited] = useState(false)

  const url = process.env[`REACT_APP_API_URL`]

  let observe

  useEffect(() => {
    if (!submited) init()
  }, [])

  if (window.attachEvent) {
    observe = function(element, event, handler) {
      element.attachEvent('on'+event, handler)
    }
  } else {
    observe = function(element, event, handler) {
      element.addEventListener(event,handler, false)
    }
  }

  const init = () => {
    let text = document.getElementsByName('message')[0]
    const resize = () => {
      text.style.height = 'auto'
      text.style.height = text.scrollHeight+'px'
    }
    // 0-timeout to get the already changed text
    const delayedResize = () => {
      window.setTimeout(resize, 0)
    }
    observe(text, 'change', resize)
    observe(text, 'cut', delayedResize)
    observe(text, 'paste', delayedResize)
    observe(text, 'drop', delayedResize)
    observe(text, 'keydown', delayedResize)

    text.focus()
    text.select()
    resize()
  }

  const formSubmit = e => {
    e.preventDefault()

    setIsLoading(true)

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

    axios.post(url, data)
      .then(res => {
        setSubmited(true)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        console.log('Message not sent')
      })
  }

  const square = () => {
   setTimeout(() => {
    setTimer(true)
   }, 2000)
    if (timer) return (
      <div className={styles.svgContainer}>
        <Square /> 
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <NavLink className={styles.contact} to='/'>
          <h1>Contact</h1>
        </NavLink>
      </div>
      {square()}
      {!submited ? (
        <form className={styles.contactForm} onSubmit={e => formSubmit(e)}>
          <div className={styles.title}>
            <h1>Contact Me</h1>
          </div>
          <input 
            onChange={e => setName(e.target.value)}
            name='name'
            className={styles.nameInput}
            type='text'
            value={name}
            required
          />
          <span className={name.length > 0 ? styles.spanTranslate : null}>Your Name</span>

          <input 
            onChange={e => setEmail(e.target.value)}
            name='email'
            className={styles.emailInput}
            type='email'
            value={email}
            required
          />
          <span className={email.length > 0 ? styles.spanTranslate : null}>Your Email</span>

          <input 
            onChange={e => setSubject(e.target.value)}
            name='subject'
            className={styles.subjectInput}
            type='text'
            value={subject}
            required={false}
          />
          <span 
            className={subject.length > 0 ? [styles.spanTranslate, styles.subjectSpan].join(' ') : styles.subjectSpan}
          >
            Subject (optional)
          </span>

          <textarea 
            onChange={e => setMessage(e.target.value)} 
            name='message' 
            className={styles.messageInput} 
            type='text'
            value={message}
            rows='1'
            required
          />
          <span 
            className={message.length > 0 ? [styles.spanTranslate, styles.messageSpan].join(' ') : styles.messageSpan}
          >
            Message
          </span>

          <div className={styles.buttonContainer}>
            <button 
              type='submit' 
              className={styles.submitButton}
            >
              { isLoading ? <Loader className={styles.loaderSvg}/> : 'submit with translation'}
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.submitedContainer}>
          <p>Message sent</p>
        </div>
      )}
    </div>
  )
}

export default Contact
