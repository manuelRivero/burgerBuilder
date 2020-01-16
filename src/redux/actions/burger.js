import * as actions from './actionsTypes'

import axios from 'axios';

// action creators

export const addIngredient = (ingredient) =>{
    return({
        type:actions.ADD_INGREDIENT,
        payload:ingredient
    })
}

export const removeIngredient = (ingredient) => {
    return ({
        type:actions.REMOVE_INGREDIENT,
        payload:ingredient
    })
}


const setIngredients = ({data})=> {
    return( {
        type: actions.SET_IGREDIENTS,
        payload: data
    })
}

const failedFetch = ( err )=>{
    
    return ({
        type: actions.FETCH_FAILED,
        payload: err
    })
}

export const initIngredients = () => {
    return dispatch =>{
        axios.get('https://mi-proyecto-5192d.firebaseio.com/ingredients.json')
        .then( ingredients => {
            dispatch(setIngredients(ingredients))
        })
        .catch( err => {
            
            dispatch(failedFetch(err))
        });
        
    }
}