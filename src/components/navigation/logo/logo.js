import React from 'react';
import BurgerLogo from '../../../assets/images/burger-logo.png';

import styles from './logo.module.css';
export default function Logo() {
  return (
    <div className={styles.Logo}>
        <img src={BurgerLogo}  alt="logo"/>
    </div>
  );
}
