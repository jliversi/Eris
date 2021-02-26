import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteServerMembership } from '../../actions/server_actions';


function ServerLeaveConfirm({history, server, currentUser, closeModal}) {

    const dispatch = useDispatch();
    const leaveServer = (e) => {
        dispatch(deleteServerMembership(currentUser.id, server.id))
            .then(() => {
                history.push('/channels/@me');
                closeModal();
            })
    }

    return (
        <div className='leave-server-container'>
            <h1>Leave '{server.name}'</h1>
            <p>Are you sure you want to leave <strong>{server.name}</strong>? You won't be able to rejoin this server unless you are re-invited</p>
            <div>
                <span onClick={closeModal}>Cancel</span>
                <button onClick={leaveServer}>Leave Server</button>
            </div>
        </div>
    )
}

export default withRouter(ServerLeaveConfirm);