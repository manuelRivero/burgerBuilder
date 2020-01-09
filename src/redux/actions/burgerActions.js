export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';


// action creators

export const addIngredient = (ingredient) =>{
    return({
        type:ADD_INGREDIENT,
        payload:ingredient
    })
}

export const removeIngredient = (ingredient) => {
    return ({
        type:REMOVE_INGREDIENT,
        payload:ingredient
    })
}