import axios from 'axios'

import * as actions from './actionsTypes'



export const purcharseBurgerSuccess = ({data}) => {
    return ({
        type: actions.PURCHARSE_BURGER_SUCCESS,
        payload: data
    })
}

export const purcharseBurgerFail = (err) => {
    return ({
        type:actions.PURCHARSE_BURGER_FAIL,
        payload: err
    })
}
export const purchaseBurger = (orderData) =>{
    console.log("purchasing")
    return( discpatch=>{

        axios.post('/orders.json', orderData)
        .then( res => {
            discpatch(purcharseBurgerSuccess(orderData))
        })
        .catch( err => {
            discpatch(purcharseBurgerFail(err))
        });
    
    })
}
