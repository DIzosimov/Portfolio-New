import React from 'react'
import '../css/Iframe.css'

const Iframe = () => {
  return (
    <>
      <div id='iframe-container'>
        <div id='iframe-wrapper'>
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
        <div id='iframe-text'>
          <h1 id='iframe-header'>
            FRONTEND WEB DEVELOPER 
          </h1>
        </div>
      </div>
    </>
  )
}

export default Iframe
