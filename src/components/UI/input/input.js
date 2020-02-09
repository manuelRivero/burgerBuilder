import React from 'react';
import styles from './input.module.css';

export default function Input(props) {

    const {type,
         placeholder,
          name,
           options,
            label,
             changed,
              value,
               valid,
                validation,
                 touched,
                  blur,
                   wasInvalid} = props;
                   
    let inputElement = null;
    
    let inputClasses = [styles.InputElement];
    

    if( !valid && validation && touched){
        inputClasses.push(styles.Invalid);
    }

    if( wasInvalid){
        inputClasses.push(styles.WasInvalid);    
    }

    switch(type){
        case('text'):
            inputElement = ( <input onChange={changed} onBlur={blur} className={inputClasses.join(' ')} type={type} value={value} name={name} placeholder={placeholder} />);
            break;
            
        case('textarea'):
             inputElement = ( <textarea onChange={changed} className={inputClasses.join(' ')} type={type} value={value}  name={name} placeholder={placeholder} />);
            break;

        case('select'):
        inputElement = ( <select onChange={changed} className={inputClasses.join(' ')}  type={type} value={value}  name={name}  >
                                {options.map( o => (<option value={o} key={o}>{o}</option>) )}
                        </select>);
            break;
        
        default:
            inputElement = ( <input onChange={changed} onBlur={blur} className={inputClasses.join(' ')} type={type} value={value} name={name} placeholder={placeholder} />);
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
