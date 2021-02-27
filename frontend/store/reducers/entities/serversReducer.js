import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../../../actions/server_actions";
import { REMOVE_CURRENT_USER } from "../../../actions/session_actions";

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVERS:
      return Object.assign({}, state, action.servers);
    case RECEIVE_SERVER:
      const { server } = action;
      return Object.assign({}, state, { [server.id]: server });
    case REMOVE_SERVER:
      const { serverId } = action;
      const newState = Object.assign({}, state);
      delete newState[serverId];
      return newState;
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default serversReducer;