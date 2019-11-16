import React, { Component } from 'react';
import BurgerIngredient from './burgerIngredient/burgerIngredient';

import styles from './burger.module.css';

export default  (props)=> {

  let transformedIngredient = Object.keys(props.ingredient)
  .map( i =>{
            return [...Array(props.ingredient[i])].map( (_,index)=>{
      return (
        <BurgerIngredient key={index + i} type={i} />
      )
    })

  }).reduce( (acumulador, elemt)=>{
    return acumulador.concat(elemt)
  }, [])
  
  
    if(transformedIngredient.length === 0){
      transformedIngredient= <p>please start adding some ingredient!</p>
    }
    return (
      <div className={styles.Burger}>
              <BurgerIngredient  type='bread-top' />

        {transformedIngredient}
        <BurgerIngredient  type='bread-bottom' />

      </div>
    )
  }

