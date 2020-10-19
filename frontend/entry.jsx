import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', function() {
    const store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});