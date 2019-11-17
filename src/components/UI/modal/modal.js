import React from 'react';
import styles from './modal.module.css';
import BackDrop from './../backdrop/backdrop'
import Aux from '../../../hoc/auxComponent';

export default (props) => {
  let inlineStyles = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1':'0'
  }
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.hide}/>
      <div style={inlineStyles} className={styles.Modal}>
        {props.children}
      </div>
    </Aux>
  )
}
