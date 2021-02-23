import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServer } from '../../actions/server_actions';

function ServerChannelIndex(props) {
  const dispatch = useDispatch();
  const server = useSelector(({entities: { servers }}) => servers[props.serverId]);
  const channels = useSelector(({ entities: { channels } }) => {
    return Object.values(channels).filter(c => c.serverId === parseInt(props.serverId))
  })
  const openChannelCreate = () => dispatch(openModal('ChannelCreateForm'));
  const openServerSettings = () => dispatch(openModal('ServerSettings'));
  
  useEffect(() => {
    dispatch(fetchServer(props.serverId));
  }, [props.serverId])
  
  
  const cLis = channels.map(el => <li key={el.id}>{el.name}</li>)
  
  if (!server) return null;
  return (
    <div className='channel-sidebar'>
      <li>{server.name}</li>
      {cLis}
    </div>
  )
}

export default ServerChannelIndex;