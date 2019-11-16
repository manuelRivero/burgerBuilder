import React from 'react';
import styles from './toolbar.module.css';
import Logo from './../logo/logo';
import NavigationItem from './../navigationItems/navigationItems'

export default function Toolbar() {
  return (
    <header className={styles.Toolbar}>
        <div>menu</div>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItem />
        </nav>
    </header>
  );
}
