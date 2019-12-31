import React from 'react';
import styles from './input.module.css';

export default function Input({type, placeholder, name, options, label, changed, value}) {

    let inputElement = null;

    switch(type){
        case('text'):
            inputElement = ( <input onChange={changed} className={styles.InputElement} type={type} value={value} name={name} placeholder={placeholder} />);
            break;
        case('textarea'):
             inputElement = ( <textarea onChange={changed} className={styles.InputElement} type={type} value={value}  name={name} placeholder={placeholder} />);
            break;
        case('select'):
        inputElement = ( <select onChange={changed} className ={styles.InputElement}  type={type} value={value}  name={name}  >
                                {options.map( o => (<option value={o} key={o}>{o}</option>) )}
                        </select>);
        break;
        default:
            inputElement = ( <input onChange={changed} className ={styles.InputElement}  type={type} name={name} placeholder={placeholder} />);
    }

  return (
    <>
        <div className={styles.Input}>
            <label className={styles.Label} >{label}</label>
            {inputElement}
        </div>
    </>
  );
}
