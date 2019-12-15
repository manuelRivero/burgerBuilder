import React from 'react';
import styles from './navigationItem.module.css'
import { NavLink } from 'react-router-dom';

export default function navigationItem(props) {
  return (
    <li className={styles.navigationItem}>
        <NavLink to={props.link} 
                  exact
                  activeClassName={styles.active}>{props.children}</NavLink>
    </li>
  );
}
