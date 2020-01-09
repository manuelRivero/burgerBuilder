import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

import burgerReducer from './reducers/burgerReducer';

const logger = store => next => action => {
    console.log(action.payload)
    next(action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(burgerReducer, composeEnhancers(applyMiddleware(logger, thunk)) );
