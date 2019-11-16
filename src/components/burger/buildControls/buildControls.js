import React from 'react'
import styles from './buildControls.module.css';
import BuildControl from './buildControl/buildControl'


const controls=[
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},

]

export default (props) => {
  
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(c =>{
            return ( <BuildControl key={c.label} {...c} disable={props.disabledInfo[c.type]}  add={props.addIngredient} des={props.desIngredient}/>)
        })}

        <button className={styles.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>Order Now!</button>
    </div>
  )
}
