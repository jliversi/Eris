import React from 'react';
import { Link } from 'react-router-dom';

function ServerIndexItem({server, className}) {
  let liProps = { className };
  if (server.imageUrl) {
    liProps.style = {backgroundImage: `url(${server.imageUrl})`} 
    liProps.className += ' img-server';
  } else {
    liProps.className += ' no-img-server';
    liProps.text = server.name.split(' ').map(el => el[0]);
  }
  return (
    <li {...liProps}>
      <Link to={`/channels/${server.id}/${server.channelIds[0]}`}>{liProps.text}</Link>
    </li>
  )


}

export default ServerIndexItem;
