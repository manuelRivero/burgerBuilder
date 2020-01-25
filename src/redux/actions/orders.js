import axios from '../../axios-orders'

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

export const purchaseBurgerStart = ()=> {
    return {
        type:actions.PURCHARSE_BURGER_START,
    }
}
export const purchaseBurger = (orderData) =>{
    
    return( dispatch=>{

        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then( res => {
            dispatch(purcharseBurgerSuccess(res))
        })
        .catch( err => {
            dispatch(purcharseBurgerFail(err))
        });
    
    })
}

export const redirectOn = () => {
    return{
        type: actions.REDIRECT_ON
    }
}