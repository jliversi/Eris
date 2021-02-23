import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import serversReducer from './serversReducer';
import channelsReducer from './channelsReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer
});

export default entitiesReducer;