import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


// regular action creators
const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

// thunk action creators

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)