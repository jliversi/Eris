import { createStore, applyMiddleware } from 'redux';
import thunk from './thunk'
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}


function configureStore(preloadedState = {}) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
}

export default configureStore;