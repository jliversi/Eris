import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchServers } from '../../actions/server_actions';

function ServerIndex(props) {
  const dispatch = useDispatch();
  const servers = useSelector(({entities: {servers}}) => servers);
  useEffect(() => {
    dispatch(fetchServers());
  }, [])
  
  const serverItems = Object.values(servers).map(s => {
    return (
      <li key={s.id}>{s.name}</li>
    )
  })

  return (
    <ul style={{ background: 'red' }}>
      {serverItems}
    </ul>
  )
}

export default ServerIndex;