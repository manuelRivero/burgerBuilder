import * as actions from './../actions/actionsTypes';


const initialState = {
    orders:[],
    loading:false,
    redirect:false
}


export default ( state = initialState, action)=>{

    switch (action.type) {
        case actions.PURCHARSE_BURGER_SUCCESS:
            return ({
                ...state,
                orders: [...state.orders, action.payload],
                loading:false,
                redirect:true
            })
            break;
        case actions.PURCHARSE_BURGER_FAIL:
            return({
                ...state,
                loading:false
            })
            break;
        case actions.PURCHARSE_BURGER_START:
            return{
                ...state,
                loading:true
            }
            break;     
            
        case actions.REDIRECT_ON:
            return {
                ...state,
                redirect:false
            }
    
        default:
            return state
            break;
    }
}