import React from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';

import Splash from './splash/Splash';
import Login from './session/Login';
import Register from './session/Register';

function App(props) {
    return (
        <>
            <Route exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
        </>
    )
}

export default App;