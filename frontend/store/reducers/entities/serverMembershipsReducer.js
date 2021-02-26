import { RECEIVE_SERVER, JOIN_SERVER, LEAVE_SERVER, RECEIVE_SERVERS } from "../../../actions/server_actions";
import { REMOVE_CURRENT_USER, RECEIVE_CURRENT_USER } from "../../../actions/session_actions";

const serverMembershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  const { serverMemberships, membership, membershipId } = action;

  switch (action.type) {
    case RECEIVE_SERVERS:
        return Object.assign({}, state, serverMemberships);
    case RECEIVE_SERVER:
        return Object.assign({}, state, serverMemberships);
    case REMOVE_CURRENT_USER:
      return {};
    case JOIN_SERVER:
        return Object.assign({}, state, {[membership.id]: membership}); 
    case LEAVE_SERVER:
        const newState = Object.assign({}, state);
        delete newState[membershipId];
        return newState;
    default:
      return state;
  }
}

export default serverMembershipsReducer;