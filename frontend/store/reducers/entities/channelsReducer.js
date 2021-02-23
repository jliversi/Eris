import { RECEIVE_SERVER } from "../../../actions/server_actions";
import { REMOVE_CURRENT_USER } from "../../../actions/session_actions";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER:
      const { channels } = action;
      return Object.assign({}, state, channels);
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default channelsReducer;