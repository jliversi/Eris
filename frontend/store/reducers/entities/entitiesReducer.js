import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import serversReducer from './serversReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer
});

export default entitiesReducer;