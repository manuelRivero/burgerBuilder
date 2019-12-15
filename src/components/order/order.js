import React from 'react';

import styles from './order.module.css';

export default function Order(props) {


  const {address, deliverymethod, email, ingredients, totalPrice}= props;

  let ingredientsArray =[];

  for(let ingredientName in ingredients){
    ingredientsArray.push({name:ingredientName, amount: ingredients[ingredientName] })
  }

  const ingredientsOutput = (
    ingredientsArray.map( ig =>{
      return ( <span className={styles.IngredientBox}>{ig.name} ({ig.amount})</span>)
    })
  )
  return (
    <>
        <div className={styles.Order}>
            <p>Ingriedients : {ingredientsOutput} </p>
            <p>Price: {Number.parseFloat(totalPrice).toFixed(2)}$</p>
        </div>
    </>
  );
}
