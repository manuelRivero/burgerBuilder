import React from 'react';
import NavigationItem from './navigationItem/navigationItem'

import styles from './navigationItems.module.css';

export default function NavigationItems() {
  return (
      <ul className={styles.NavigationItems}>
          <NavigationItem link="/" active >Burger Builder</NavigationItem>
          <NavigationItem link="/" active >Checkout</NavigationItem>

      </ul>

  );
}
