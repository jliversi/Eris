import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/session_actions';

import ServerIndex from './servers/ServerIndex';
import ChannelIndex from './channels/ChannelIndex';

function Dashboard(props) {
  // temp
  const dispatch = useDispatch();

  return (
    <div className='dashboard'>
      <ServerIndex />
      <ChannelIndex />
      <div style={{background: 'yellow'}}></div>



      {/* temp */}
      <button style={{position: 'absolute', right: 0, top: 0}} onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Dashboard;