import React from 'react';
import styles from './drawerToggle.module.css';

export default function drawerToggle(props) {
  return (
    <div className={styles.DrawerToggle} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>

  );
}
