import React from 'react';
import styles from './toolbar.module.css';
import Logo from './../logo/logo';
import DrawerToggle from './../sideDrawer/drawerToggle/drawerToggle';
import NavigationItem from './../navigationItems/navigationItems';

export default function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
        <DrawerToggle toggle={props.toggleSideDrawer} />
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={[styles.Navigation]}>
            <NavigationItem />
        </nav>
    </header>
  );
}
