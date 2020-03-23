import React from "react";
import Burger from "./../burger/burger";
import Buttom from "./../UI/button/button";

import styles from "./checkoutSummary.module.css";

export default function checkoutSummary(props) {
  return (
    <>
      <div className={styles.CheckoutSummary}>
        <h1> Enjoy it !</h1>
        <Burger ingredient={props.ingredient} />

        <Buttom clicked={props.checkoutCancelled} type="Danger">
          Cancel
        </Buttom>
        <Buttom clicked={props.checkoutContinue} type="Success">
          Contiue
        </Buttom>
      </div>
    </>
  );
}
