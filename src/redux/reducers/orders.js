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
            });
        case actions.PURCHARSE_BURGER_FAIL:
            return({
                ...state,
                loading:false
            });
        case actions.PURCHARSE_BURGER_START:
            return({
                ...state,
                loading:true
            })
        case actions.REDIRECT_ON:
            return ({
                ...state,
                redirect:false
            });
        case actions.FETHC_ORDER_START:
            return ({
                ...state,
                loading: true,

            });
        case actions.FETHC_ORDER_FAIL:
        return ({
            ...state,
            loading: false,
            
        });

        case actions.FETHC_ORDER_SUCCESS:
            return ({
                ...state,
                orders : action.payload,
                loading: false,
                
            });
        default:
            return state;
    }
}