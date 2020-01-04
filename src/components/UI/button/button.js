import React from 'react';
import styles from './button.module.css'

export default function Button(props) {
  return (
    <button onClick={props.clicked} className={[styles.Button, styles[props.type]].join(' ')} disabled={props.disabled | false}>
        {props.children}
    </button>
  );
}
