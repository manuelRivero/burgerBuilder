import React from 'react';
import styles from './backdrop.module.css'

export default (props) => {
  console.log(props.show)
  return  props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null;
}
