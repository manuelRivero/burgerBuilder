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
    console.log(orderData)
    return( dispatch=>{

        dispatch(purchaseBurgerStart());
        axios.post(`/orders.json?auth=${orderData.tokenId}`, orderData)
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

const fetchOrderSuccess = (orders) =>{
  return ({
        type: actions.FETHC_ORDER_SUCCESS,
        payload: orders
    })
}

const fetchOrderFail= (err) =>{
    return ({
        type: actions.FETHC_ORDER_FAIL,
        payload: err.message
    })
}
const fetchOrderStart = () => {
    return {
        type:actions.FETHC_ORDER_START
    }
}
export const fetchOrder = (token) =>{
    
    return( dispatch=>{
        dispatch(fetchOrderStart())
        axios.get('/orders.json?auth=' + token )
        .then( orders => {
            let ordersArray = [];
    
            for( let order in orders.data){
                ordersArray.push(orders.data[order])
            }
            dispatch(fetchOrderSuccess(ordersArray))
        })
        .catch( err => {
            dispatch(fetchOrderFail(err))
        });
    
    })
}