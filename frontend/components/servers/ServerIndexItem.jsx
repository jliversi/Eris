import React from 'react';
import { Link } from 'react-router-dom';

function ServerIndexItem({server}) {
  let liProps = {};
  if (server.imageUrl) {
    liProps.style = {backgroundImage: `url(${server.imageUrl})`} 
  } else {
    liProps.className = 'no-img-server';
    liProps.text = server.name.split(' ').map(el => el[0]);
  }

  return (
    <li {...liProps}>
      <Link to={`/channels/${server.id}`}>{liProps.text}</Link>
    </li>
  )


}

export default ServerIndexItem;
