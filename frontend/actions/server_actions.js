import * as ServerApiUtil from '../util/server_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const JOIN_SERVER = 'JOIN_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

// regular
const receiveServer = ({server, members}) => ({
  type: RECEIVE_SERVER,
  server,
  members
});

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

const joinServer = (userId, serverId) => ({
  type: JOIN_SERVER,
  userId,
  serverId
})
const leaveServer = (userId, serverId) => ({
  type: LEAVE_SERVER,
  userId,
  serverId
})


// thunk

export const fetchServers = () => dispatch => (
  ServerApiUtil.fetchServers()
    .then(
      servers => dispatch(receiveServers(servers))
    )
);

export const fetchServer = (id) => dispatch => (
  ServerApiUtil.fetchServer(id)
    .then(
      payload => dispatch(receiveServer(payload))
    )
);

export const createServer = server => dispatch => (
  ServerApiUtil.createServer(server)
    .then(
      payload => dispatch(receiveServer(payload)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
);