import React from 'react';
import styles from './media.module.scss';

const Media = (props) => {
  return (
    <div className={styles.mediaContainer}>
      <div className={styles.imageMedia}>
        <img src={props.url}/>
      </div>
    </div>
  )
}

export default Media;
