import React from 'react'

import data from '../../data/data.json'

const Projects = () => {
  return (
    <div>
      {data.map(data => {
        return (
          <>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <img src={`${data.image}`} alt="img"/>
            <p>{data.description}</p>
          </>
        )
      })}
    </div>
  )
}

export default Projects
