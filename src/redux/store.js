import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

import burgerReducer from './reducers/burgerReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(burgerReducer, composeEnhancers(applyMiddleware( thunk)) );
