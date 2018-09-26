import React from 'react';
import styles from './detailmodal.module.scss';

const DetailModal = (props) => {
  return(
    <div className={styles.detailModalContainer}>
      <img src={props.url}/>
    </div>
  )
}

export default DetailModal;
