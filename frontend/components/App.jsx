import React from 'react';
import { Route } from 'react-router-dom';

import Splash from './Splash';
import Login from './session/Login';

function App(props) {
    return (
        <>
            <Route exact path='/' component={Splash} />
            <Route exact path='/login' component={Login} />
        </>
    )
}

export default App;