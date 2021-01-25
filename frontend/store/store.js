import { createStore, applyMiddleware } from 'redux';
import thunk from './thunk'
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

function configureStore(preloadedState = {}) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk,logger)
    )
}

export default configureStore;