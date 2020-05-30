import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as PacMan } from '../../Assets/svgs/pacMan.svg'

const LazyLoading = () => {
  return (
    <div className={styles.position}>
      <PacMan />;
    </div>
  )
};

export default LazyLoading;
