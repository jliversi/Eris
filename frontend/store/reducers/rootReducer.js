import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import errorsReducer from './errorsReducer';
import sessionReducer from './sessionReducer';



const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer
})

export default rootReducer;