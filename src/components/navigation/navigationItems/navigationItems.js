import React from 'react';
import NavigationItem from './navigationItem/navigationItem'

import styles from './navigationItems.module.css';

export default function NavigationItems() {

  
  return (
      <ul className={styles.NavigationItems}>
          <NavigationItem link="/"  >Burger Builder</NavigationItem>
          <NavigationItem link="/orders"   >Orders</NavigationItem>
          <NavigationItem link="/auth"   >Log in</NavigationItem>

      </ul>

  );
}
