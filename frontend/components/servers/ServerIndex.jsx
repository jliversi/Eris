import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

import ServerIndexItem from './ServerIndexItem';

function ServerIndex(props) {
  const dispatch = useDispatch();
  const servers = useSelector(({entities: {servers}}) => servers);
  useEffect(() => {
    dispatch(fetchServers());
  }, [])
  const openServerCreate = () => dispatch(openModal('ServerCreateForm'));

  const serverItems = Object.values(servers).map(s => {
    const className = parseInt(props.match.params.serverId) === s.id ? 'selected' : '';
    return (
      <ServerIndexItem className={className} key={s.id} server={s} />
    )
  })
  const topClassName = props.match.params.serverId === '@me' ? 'no-img-server selected' : 'no-img-server';
  return (
    <ul className='server-sidebar'>
      <li className={topClassName}><Link to='/channels/@me'><i className="fas fa-apple-alt"></i></Link></li>
      <hr/>
      {serverItems}
      <li onClick={openServerCreate}><i className="fas fa-plus"></i></li>
    </ul>
  )
}

export default withRouter(ServerIndex);