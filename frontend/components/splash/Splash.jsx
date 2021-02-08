import React from 'react';

import { useLoggedIn } from '../custom_hooks/session_hooks';

import SplashHeader from './SplashHeader';
import SplashMain from './SplashMain';
import SplashFooter from './SplashFooter';

function Splash(props) {
    const [loggedIn] = useLoggedIn();
    
    return (
        <> 
            <div className='splash'>

                <SplashHeader loggedIn={loggedIn} />
                <SplashMain />

            </div>
            <SplashFooter loggedIn={loggedIn} />
        </>
    );
};

export default Splash;