import React from 'react';
import styles from './social.module.scss';
import insta from './assets/insta.png'
import envelope from './assets/envelope.png'
const Social = () => {
  return(
    <div className={styles.socialContainer}>
      <img src={insta}/>
      <img src={envelope}/>
    </div>
  )
}

export default Social;
