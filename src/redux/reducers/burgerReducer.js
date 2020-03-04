import * as actionTypes from './../actions/actionsTypes';


const INGREDIENT_PRICE={
    salad:0.5,
    bacon:0.6,
    cheese:0.4,
    meat:1.3
  }

const initialState= {

    ingredients:null,
    error:false,
    totalPrice:4.5,
    building:false,

}

const reducer =(state=initialState, action)=>{
    
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            
            return {
                ...state,
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] + 1  },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload],
                building:true
            };

        
        case actionTypes.FETCH_FAILED:
            return ({
                ...state,
                error:true
            });
            
        case actionTypes.REMOVE_INGREDIENT:

            return ({
                ...state,
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] - 1  },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload],
                building:true

            });
            

        case actionTypes.SET_IGREDIENTS:
            return ({
                ...state,
                ingredients: action.payload,
                error:false,
                totalPrice:4.5
            })
    
        default:
          return state  
    }
    
}

export default reducer;