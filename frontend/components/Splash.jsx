import React from 'react';
import { Link } from 'react-router-dom';

function Splash({ loggedIn }) {
    const button = loggedIn ? <Link to='/channels'>Open Discord</Link> : <Link to='/login' >Login</Link>
    return (
        <>
            <div id='splash'>
                
                <header id='splash-header'>
                    <div id='splash-logo'>Eris</div>
                    <div id='splash-header-links'>
                        <a target='_blank' href='https://github.com/jliversi'>Github</a>
                        <a target='_blank' href='https://www.linkedin.com/in/jliversi/'>LinkedIn</a>
                        <a target='_blank' href=''>Portfolio Site</a>
                    </div>
                    {button}
                </header>

                <div id='splash-main-element'>
                    <h1 id='splash-title'>Your place to talk</h1>
                </div>

                <div>Elemtnt 1 + 2 + 3 ????</div>
            </div>
            <footer>more links </footer>
        </>
    );
};

export default Splash;