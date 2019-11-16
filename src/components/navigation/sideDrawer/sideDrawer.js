import React from 'react';
import Logo from './../logo/logo';
import NavigationItems from './../navigationItems/navigationItems';

import styles from './sideDrawer.module.css';

export default function sideDrawer() {
  return (
      <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
               <Logo /> 
            </div>
            <nav>
              <NavigationItems />
            </nav>
            
      </div>
  );
}
