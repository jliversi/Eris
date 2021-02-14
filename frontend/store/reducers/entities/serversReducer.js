import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../../../actions/server_actions";

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVERS:
      return Object.assign({}, state, action.servers);
    case RECEIVE_SERVER:
      const { server } = action;
      return Object.assign({}, state, { [server.id]: server });
    default:
      return state;
  }
};

export default serversReducer;