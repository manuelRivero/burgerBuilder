import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import burgerReducer from './reducers/burgerReducer';
import order from './reducers/orders';
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
    burger: burgerReducer,
    order: order,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore( reducers , composeEnhancers(applyMiddleware( thunk)) );
