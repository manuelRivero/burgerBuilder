import React from 'react';
import Button from '../../UI/button/button'

export default (props) => {
    const {ingredients}= props;
    let ingredientsList =    Object.keys(ingredients).map( ingredient =>{
        return (<ul>{`${ingredient} : ${ingredients[ingredient]}`} </ul>)
    })
  return (
    <div>
        <h3>Your Order</h3>
        <p>A delicius burger with the following ingredients:</p>
        <ul>
            {
             ingredientsList
            }
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout ?</p>

        <Button clicked={props.cancelPurchasing} type="Danger">Cancel</Button>
        <Button clicked={props.continuePurchasing} type="Success">Continue</Button>

    </div>
  )
}
