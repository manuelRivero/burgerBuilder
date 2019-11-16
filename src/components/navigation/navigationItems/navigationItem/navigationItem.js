import React from 'react';
import styles from './navigationItem.module.css'

export default function navigationItem(props) {
  return (
    <li className={styles.navigationItem}>
        <a href={props.link}>{props.children}</a>
    </li>
  );
}
