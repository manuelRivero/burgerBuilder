import React from 'react';
import Burger from './../burger/burger';
import Buttom from './../UI/button/button';

import styles from './checkoutSummary.module.css';

export default function checkoutSummary(props) {
  return (
    <>
        <div className={styles.CheckoutSummary}>
            <h1> Enjoy it !</h1>
            <div style={{width:'300px', margin:'auto'}}>
                <Burger ingredient={props.ingredient}/>
            </div>
            
            <Buttom clicked type="Danger">Cancel</Buttom>
            <Buttom clicked type="Success">Contiue</Buttom>

        </div>
    </>
  );
}
