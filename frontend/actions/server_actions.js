import * as ServerApiUtil from '../util/server_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const JOIN_SERVER = 'JOIN_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

// regular
const receiveServer = ({server, members, channels, serverMemberships}) => ({
  type: RECEIVE_SERVER,
  server,
  members,
  channels,
  serverMemberships
});

const receiveServers = ({servers, serverMemberships}) => ({
  type: RECEIVE_SERVERS,
  servers,
  serverMemberships
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

const joinServer = (membership) => ({
  type: JOIN_SERVER,
  membership
})
const leaveServer = (membershipId) => ({
  type: LEAVE_SERVER,
  membershipId
})


// thunk

export const fetchServers = () => dispatch => (
  ServerApiUtil.fetchServers()
    .then(
      payload => dispatch(receiveServers(payload))
    )
);

export const fetchServer = (id) => dispatch => (
  ServerApiUtil.fetchServer(id)
    .then(
      payload => dispatch(receiveServer(payload))
    )
);

export const createServer = serverFormData => dispatch => (
  ServerApiUtil.createServer(serverFormData)
    .then(
      payload => dispatch(receiveServer(payload)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
);

export const createServerMembership = (userId, serverId) => dispatch => (
  ServerApiUtil.createServerMembership(userId, serverId)
    .then(
      () => dispatch(joinServer(userId, serverId)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)

export const deleteServerMembership = (userId, serverId) => dispatch => (
  ServerApiUtil.deleteServerMembership(userId, serverId)
    .then(
      ({ membershipId }) => dispatch(leaveServer(membershipId)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
)