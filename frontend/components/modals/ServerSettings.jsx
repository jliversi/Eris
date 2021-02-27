import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteServer } from '../../actions/server_actions';
import ServerSettingsMembers from '../servers/ServerSettingsMembers';
import ServerSettingsOverview from '../servers/ServerSettingsOverview';


const panels = [
    ServerSettingsOverview,
    ServerSettingsMembers
];

function ServerSettings({closeModal, server, history}) {
    const [panelIdx, setPanelIdx] = useState(0);
    const dispatch = useDispatch();
    const deleteServerCb = () => dispatch(deleteServer(server.id)).then(() => {
        closeModal();
        history.push('/channels/@me');
    })


    
    const Panel = panels[panelIdx];

    return (
        <div className='server-settings'>
            <nav>
                <ul>
                    <h3>{server.name.toUpperCase()}</h3>
                    <li className={panelIdx ? '' : 'selected' } onClick={() => setPanelIdx(0)}>Overview</li>
                    <h3>USER MANAGEMENT</h3>
                    <li className={panelIdx ? 'selected' : ''} onClick={() => setPanelIdx(1)}>Members</li>
                    <hr/>
                    <li onClick={deleteServerCb}>Delete Server</li>
                </ul>
            </nav>
            <section>
                <Panel closeModal={closeModal} server={server} />
            </section>
            <i className='close-fs-modal' onClick={closeModal}>&#215;</i>
        </div>
    )
}

export default withRouter(ServerSettings);
