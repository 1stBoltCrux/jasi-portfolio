import React from 'react';
import styles from './nav.module.scss';

const Nav = (props) => {
  return (
    <div className={styles.navContainer}>
      <h3 onClick={()=> props.onHandleSelect('paintings')}>Paintings</h3>
      <h3 onClick={()=> props.onHandleSelect('drawings')}>Drawings</h3>
      <h3 onClick={()=> props.onHandleSelect('film')}>Film</h3>
    </div>
  )
}

export default Nav;
