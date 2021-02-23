import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/session_actions';

import ServerIndex from './servers/ServerIndex';
import ChannelIndex from './channels/ChannelIndex';
import MainPanel from './messages/MainPanel';

function Dashboard(props) {
  // temp
  const dispatch = useDispatch();

  return (
    <div className='dashboard'>
      <ServerIndex />
      <ChannelIndex />
      <MainPanel />



      {/* temp */}
      <button style={{position: 'absolute', right: 0, top: 0}} onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Dashboard;