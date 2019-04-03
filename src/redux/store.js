import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from '../reducers/index';

let store;

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = applyMiddleware(thunk);

store = createStore( Reducer, composeEnhancers(middleware) );

export default store;