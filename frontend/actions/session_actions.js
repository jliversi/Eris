import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';


// regular action creators
const receiveCurrentUser = ({ user }) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
})

// thunk action creators

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      () => dispatch(removeCurrentUser()),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)