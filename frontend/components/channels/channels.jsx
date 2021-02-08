import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions'; 

function Channels(props) {
  const dispatch = useDispatch();

  return (
    <button onClick={ () => dispatch(logout()) }>Logout</button>
  )
}

export default Channels;