import React from 'react'
import  styles  from './buildControl.module.css'


export default (props) => {
  const addClickHandler=(e)=>{
    props.add(props.type)
  }

  const removeClickHandler=(e)=>{
    props.des(props.type)
  }

  console.log(props.disable)
  return (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.less} onClick={removeClickHandler} disabled={props.disable}>Less</button>
        <button className={styles.More} onClick={addClickHandler}>More</button>
      
    </div>
  )
}
