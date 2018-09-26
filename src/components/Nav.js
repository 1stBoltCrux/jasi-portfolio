import React from 'react';
import styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <h3>Paintings</h3>
      <h3>Drawings</h3>
      <h3>Film</h3>
    </div>
  )
}

export default Nav;
