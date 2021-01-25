import React from 'react';
import { Link } from 'react-router-dom';

function Splash({ loggedIn }) {
    const button = loggedIn ? <Link to='/channels'>Open Discord</Link> : <Link to='/login' >Login</Link>
    return (
        <>
            <div id='splash'>
                
                <header id='splash-header'>
                    <Link to='/' id='splash-logo'>Eris</Link>
                    <div id='splash-header-links'>
                        <a target='_blank' href='https://github.com/jliversi'>Github</a>
                        <a target='_blank' href='https://www.linkedin.com/in/jliversi/'>LinkedIn</a>
                        <a target='_blank' href=''>Portfolio Site</a>
                    </div>
                    {button}
                </header>

                <div id='splash-main-element'>
                    <section id='splash-float-left'></section>
                    <section id='splash-float-right'></section>
                    <div id='splash-main-box'>
                        <h1>Your place to talk</h1>
                        <p>Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.</p>
                    </div>
                </div>

            </div>
            <div style={{backgroundColor: 'white'}}>Elemtnt 1 + 2 + 3 ????</div>
            <footer>more links </footer>
        </>
    );
};

export default Splash;