import React from 'react';
import styles from './input.module.css';

export default function Input(props) {

    let inputElement = null;

    switch(props.type){
        case('text'):
            inputElement = ( <input className ={styles.InputElement} {...props} />);
            break;
        case('textarea'):
             inputElement = ( <textarea className ={styles.InputElement}  {...props} />);
            break;
        default:
            inputElement = ( <input className ={styles.InputElement}  {...props} />);
    }

  return (
    <>
        <div className={styles.Input}>
            <label className={styles.Label} >{props.label}</label>
            {inputElement}
        </div>
    </>
  );
}
