import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import serversReducer from './serversReducer';
import channelsReducer from './channelsReducer';
import serverMembershipsReducer from './serverMembershipsReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  serverMemberships: serverMembershipsReducer
});

export default entitiesReducer;