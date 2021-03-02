import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function ServerSettingsOverview({ server }) {
    const dispatch = useDispatch();
    const openServerLeaveConfirm = () => dispatch(openModal('ServerLeaveConfirm', { server } ));
    return (
        <>
            <div onClick={openServerLeaveConfirm}>OVERVIEW</div>
        </>
    )
}

export default ServerSettingsOverview;
