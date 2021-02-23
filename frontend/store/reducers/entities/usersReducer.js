import { RECEIVE_SERVER } from "../../../actions/server_actions";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../../../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { user } = action;
      return Object.assign({}, state, {[user.id]: user});
    case RECEIVE_SERVER:
      const { members } = action;
      return Object.assign({}, state, members);
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;