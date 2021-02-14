import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

import ServerIndexItem from './ServerIndexItem';

function ServerIndex(props) {
  const dispatch = useDispatch();
  const servers = useSelector(({entities: {servers}}) => servers);
  useEffect(() => {
    dispatch(fetchServers());
  }, [])
  const openCreateServer = () => dispatch(openModal('serverCreate'));

  const serverItems = Object.values(servers).map(s => {
    return (
      <ServerIndexItem key={s.id} server={s} />
    )
  })

  return (
    <ul style={{ background: 'red' }}>
      {serverItems}
      <li onClick={openCreateServer}><i className="fas fa-plus"></i></li>
    </ul>
  )
}

export default ServerIndex;