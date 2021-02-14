import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import errorsReducer from './errorsReducer';
import uiReducer from './ui/uiReducer';
import sessionReducer from './sessionReducer';



const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: uiReducer,
    session: sessionReducer
})

export default rootReducer;