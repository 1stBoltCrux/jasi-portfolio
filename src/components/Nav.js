import React from 'react';
import styles from './nav.module.scss';

const Nav = (props) => {
  return (
    <div className={styles.navContainer}>
      <h3 onClick={()=> props.onHandleSelect('paintings')}>paintings</h3>
      <h3 onClick={()=> props.onHandleSelect('drawings')}>drawings</h3>
      <h3 onClick={()=> props.onHandleSelect('film')}>35mm sketchbook</h3>
    </div>
  )
}

export default Nav;
