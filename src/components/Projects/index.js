import React from 'react'
import styles from './styles.module.scss'

import data from '../../data/data.json'

const Projects = () => {
  return (
    <div className={styles.cardContainer}>
      {data.map(data => {
        return (
          <div className={styles.card}>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <img src={`${data.image}`} alt="img" className={styles.cardImage} />
            <p>{data.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
