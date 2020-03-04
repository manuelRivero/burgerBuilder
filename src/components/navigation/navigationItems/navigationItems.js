import React from 'react';
import NavigationItem from './navigationItem/navigationItem'

import styles from './navigationItems.module.css';

export default function NavigationItems(props) {

  
  return (
      <ul className={styles.NavigationItems}>
          <NavigationItem link="/"  >Burger Builder</NavigationItem>
          <NavigationItem link="/orders"   >Orders</NavigationItem>
          {props.isAuth ?
          <NavigationItem link="/logout"   >Log out</NavigationItem>:
          <NavigationItem link="/auth"   >Log in</NavigationItem> 
          
           }

      </ul>

  );
}
