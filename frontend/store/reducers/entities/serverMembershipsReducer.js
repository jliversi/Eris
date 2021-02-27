import { RECEIVE_SERVER, JOIN_SERVER, LEAVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../../../actions/server_actions";
import { REMOVE_CURRENT_USER, RECEIVE_CURRENT_USER } from "../../../actions/session_actions";

const serverMembershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  const { serverMemberships, membership, membershipId, serverId } = action;
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVERS:
        return Object.assign({}, state, serverMemberships);
    case RECEIVE_SERVER:
        return Object.assign({}, state, serverMemberships);
    case REMOVE_SERVER:
        Object.keys(state).forEach(k => {
          if (state[k].serverId === serverId) {
            delete newState[k];
          }
        });
        return newState;
    case REMOVE_CURRENT_USER:
      return {};
    case JOIN_SERVER:
        return Object.assign({}, state, {[membership.id]: membership}); 
    case LEAVE_SERVER:
        delete newState[membershipId];
        return newState;
    default:
      return state;
  }
}

export default serverMembershipsReducer;