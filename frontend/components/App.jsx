import React from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';

import Splash from './splash/Splash';
import Login from './session/Login';
import Register from './session/Register';
import Dashboard from './Dashboard';
import Modal from './Modal';

function App(props) {
    return (
        <>
            <Modal />
            <Route exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute path='/channels/:serverId' component={Dashboard} />
        </>
    )
}

export default App;