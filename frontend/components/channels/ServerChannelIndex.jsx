import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from '../../custom_hooks/session_hooks';
import { openModal, openFsModal } from '../../actions/modal_actions';
import { fetchServer } from '../../actions/server_actions';
import ChannelHeader from './ChannelHeader';
import ChannelFooter from './ChannelFooter';


function ServerChannelIndex(props) {
  const dispatch = useDispatch();
  const [currentUser] = useCurrentUser(); 
  const server = useSelector(({entities: { servers }}) => servers[props.serverId]);
  const channels = useSelector(({ entities: { channels } }) => {
    return Object.values(channels).filter(c => c.serverId === parseInt(props.serverId))
  })
  const openChannelCreate = () => dispatch(openModal('ChannelCreateForm', { server, currentUser }));
  const openServerSettings = () => dispatch(openFsModal('ServerSettings', { server, fullscreen: true }));
  const openServerLeaveConfirm = () => dispatch(openModal('ServerLeaveConfirm', { server, currentUser } ));
  const openUserSettings = () => dispatch(openModal('UserSettings'), { currentUser, fullscreen: true });
  
  useEffect(() => {
    dispatch(fetchServer(props.serverId));
  }, [props.serverId])
  
  
  const cLis = channels.map(el => <li key={el.id}>{el.name}</li>)
  
  if (!server) return null;
  return (
    <div className='channel-sidebar'>
      <ChannelHeader {...{ openChannelCreate, openServerSettings, openServerLeaveConfirm, server, currentUser }} />
      <li>{server.name}</li>
      {cLis}
      <ChannelFooter {...{ openUserSettings, currentUser }} /> 
    </div>
  )
}

export default ServerChannelIndex;
