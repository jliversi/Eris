import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/Root';

let preloadedState = {};

document.addEventListener('DOMContentLoaded', function() {
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: { currentUserId: window.currentUser.id }
        }
    }



    const store = configureStore(preloadedState);

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});