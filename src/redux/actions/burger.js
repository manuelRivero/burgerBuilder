import * as actions from './actionsTypes'

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
