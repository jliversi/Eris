import React from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';

import Splash from './splash/Splash';
import Login from './session/Login';
import Register from './session/Register';
import Dashboard from './Dashboard';
import Modal from './modals/Modal';
import FullscreenModal from './modals/FullscreenModal';

function App(props) {
    return (
        <>
            <FullscreenModal />
            <Modal />
            <Route exact path='/' component={Splash} />
            <Route exact path='/invite/:inviteCode' render={() => <div>hello</div>} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute path='/channels/:serverId?/:channelId?' component={Dashboard} />
        </>
    )
}

export default App;