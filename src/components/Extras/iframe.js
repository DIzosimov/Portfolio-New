import React, { useEffect } from 'react'
import styles from './styles.module.scss'

import { ReactComponent as Gif } from '../../Assets/svgs/gif.gif'

const Iframe = ({ id }) => {
  let player
  useEffect(() => {
    // On mount, check to see if the API script is already loaded
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else { // If script is already there, load the video directly
      loadVideo()
    }
  }, [player])

  const loadVideo = () => {
    player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      height: '700',
      width: '1400',
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        playlist: id
      },
      events: {
        onReady: onPlayerReady,
      },
    })
  }

  const onPlayerReady = e => {
    debugger
    e.target.playVideo()
    e.target.setVolume(15)
  }

  return (
    <>
      <div className={styles.iframeContainer}>
        <div id={`youtube-player-${id}`} className={styles.iframeWrapper} />
      </div>
    </>
  )
}

export default Iframe
