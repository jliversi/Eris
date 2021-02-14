import React from 'react';
import { withRouter } from 'react-router-dom';

function ChannelIndex(props) {
  console.log(props)
  return (
    <div style={{ background: 'blue' }}>chanels</div>
  )
}

export default withRouter(ChannelIndex);