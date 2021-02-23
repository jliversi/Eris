import React from 'react';
import { withRouter } from 'react-router-dom';
import DMChannelIndex from './DMChannelIndex';
import ServerChannelIndex from './ServerChannelIndex';


function ChannelIndex(props) {
  const { serverId } = props.match.params;
  
  if (serverId === '@me') {
    return <DMChannelIndex />
  } else {
    return <ServerChannelIndex serverId={serverId} />
  }
}

export default withRouter(ChannelIndex);