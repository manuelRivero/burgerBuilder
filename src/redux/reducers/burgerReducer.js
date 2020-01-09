import { ADD_INGREDIENT, REMOVE_INGREDIENT} from './../actions/burgerActions';


const INGREDIENT_PRICE={
    salad:0.5,
    bacon:0.6,
    cheese:0.4,
    meat:1.3
  }

const initialState= {

    ingredients:{
        meat:0,
        bacon:0,
        salad:0,
        cheese:0
    },
    totalPrice:4.5

}

const reducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_INGREDIENT:
            
            return {
                ...state,
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] + 1  },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload]
            };
        case REMOVE_INGREDIENT:
            return ({
                ...state,
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] - 1  },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload]

            })
    
        default:
          return state  
    }
    
}

export default reducer;