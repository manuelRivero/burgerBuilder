import React from 'react';
import styles from './burgerIngredient.module.css'

export default (props) => {
    let ingredient=null;
    switch(props.type){
        case('bread-top'):
        ingredient = <div className={styles.BreadTop}></div>
        break;
        case('bread-bottom'):
        ingredient = <div className={styles.BreadBottom}></div>
        break;
        case('meat'):
        ingredient = <div className={styles.Meat}></div>
        break;
        case('cheese'):
        ingredient = <div className={styles.Cheese}></div>
        break;

    }
  return ( ingredient )
}
