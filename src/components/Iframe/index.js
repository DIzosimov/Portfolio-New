import React from 'react'
import styles from './styles.module.scss'

const Iframe = () => {
  return (
    <>
      <div className={styles.iframeContainer}>
        <div className={styles.iframeWrapper}>
          <iframe 
            src="https://fast.wistia.net/embed/iframe/2oe0gksk9d?videoFoam=true" 
            title="Plexus - 27669 Video" 
            allowtransparency="true" 
            frameBorder="0" 
            scrolling="no" 
            className="wistia_embed" 
            name="wistia_embed" 
            width="100%" 
            height="1080px">
          </iframe>      
        </div>
        <div className={styles.iframeText}>
          <h1 className={styles.iframeHeader}>
            FRONTEND WEB DEVELOPER 
          </h1>
        </div>
      </div>
    </>
  )
}

export default Iframe
