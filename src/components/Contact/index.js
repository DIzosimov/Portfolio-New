import React, { useState } from 'react'
import axios from 'axios'

import styles from './styles.module.scss'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submited, setSubmited] = useState(false)

  const url = process.env[`REACT_APP_API_URL`]

  const resetForm = () => {
    debugger
    setMessage('')
    setName('')
    setEmail('')
    setIsLoading(false)
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
      .then( res => {
        setSubmited(true)
        resetForm()
      })
      .catch(() => {
        setIsLoading(false)
        console.log('Message not sent')
      })
  }
  //add if statement with submited to return email submited page instead of form
  return (
    <div className={styles.container}>
      <form className={styles.contactForm} onSubmit={e => formSubmit(e)}>
        <label className={styles.subject} htmlFor='message-subject'>Subject</label>
        <input 
          onChange={e => setSubject(e.target.value)}
          name='subject'
          className={styles.subjectInput}
          type='text'
          placeholder='Subject'
          value={subject}
          required={false}
        />

        <label className={styles.message} htmlFor='message-input'>Your Message</label>
        <textarea 
          onChange={e => setMessage(e.target.value)} 
          name='message' 
          className={styles.messageInput} 
          type='text'
          placeholder='Please write your message here' //add i18n here
          value={message}
          required
        />

        <label className={styles.name} htmlFor='message-name'>Your Name</label>
        <input 
          onChange={e => setName(e.target.value)}
          name='name'
          className={styles.nameInput}
          type='text'
          placeholder='Your name' //add i18n
          value={name}
          required
        />

        <label className={styles.email} htmlFor='message-email'>Your Email</label>
        <input 
          onChange={e => setEmail(e.target.value)}
          name='email'
          className={styles.emailInput}
          type='email'
          placeholder='Your email' //add i18n
          value={email}
          required
        />

        <div className={styles.buttonContainer}>
          <button type='submit' className={styles.submitButton}>{ isLoading ? 'Loader' : 'submit with translation'}</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
