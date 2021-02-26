import React, { useRef, useState } from 'react';
import { truncateText } from '../../util/util_functions';



function ChannelHeader({ openServerSettings, openChannelCreate, openServerLeaveConfirm, server, currentUser }) {

    const [dropdownOpen, changeDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const headerRef = useRef(null);
    const closeDropdown = (e) => {
        e.stopPropagation();
        changeDropdown(() => false);
        document.removeEventListener('click', documentListener);
    }
    const documentListener = e => {
        if (!dropdownRef.current) return;
        if (e.target === dropdownRef.current || e.target === headerRef.current || headerRef.current.contains(e.target)) return;
        closeDropdown(e);
    }
    const openDropdown = (e) => {
        e.stopPropagation();
        if (dropdownOpen) return;
        changeDropdown(() => true);
        document.addEventListener('click', documentListener);
    }
    const headerClick = dropdownOpen ? closeDropdown : openDropdown;
    const dropdownContent = currentUser.id === server.ownerId ? (
        <>
            <li onClick={openServerSettings}>Server Settings<i className="fas fa-cog"></i></li>
            <li onClick={openChannelCreate}>Create Channel<i className="fas fa-plus-circle"></i></li>
        </>
    ) : (
        <li className='leave-server' onClick={openServerLeaveConfirm}>Leave Server<i className="fas fa-sign-out-alt"></i></li>
    )


    const dropdown = dropdownOpen ? (
        <ul ref={dropdownRef} className='server-dropdown' >
            {dropdownContent}
        </ul>
    ) : null;

    return (
        <>
            <div ref={headerRef} onClick={headerClick} className={`server-header ${dropdownOpen ? 'dd-open' : ''}`}>  
                <h1>{truncateText(server.name, 25)}</h1>
                <i className={`fas ${dropdownOpen ? 'fa-times' : 'fa-angle-down'}`}></i>
            </div>
            {dropdown}
        </>
    )
}

export default ChannelHeader;