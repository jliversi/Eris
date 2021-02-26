import React from 'react';
import { useCurrentUser } from '../../custom_hooks/session_hooks';

function ChannelFooter({ openUserSettings }) {
    const [currentUser] = useCurrentUser();

    return (
        <footer>{currentUser.discriminator}</footer>
    )
}

export default ChannelFooter;