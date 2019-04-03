import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from '../reducers/index';

import { loadState, saveState} from './localStorage';

const persistedState = loadState();
// console.log('persistedState', persistedState);

let store;

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = applyMiddleware(thunk);

// store = createStore( Reducer, composeEnhancers(middleware) );

if( persistedState !== undefined && persistedState.auth.user !== null ){
    store = createStore( Reducer, persistedState, composeEnhancers(middleware) );
} else {
    store = createStore( Reducer, composeEnhancers(middleware) );
}

store.subscribe(() => {
    let stored = store.getState();
    saveState({
        auth: stored.auth
    });
});

export default store;