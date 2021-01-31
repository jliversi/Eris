import React from 'react';
import { Link } from 'react-router-dom';

function SplashHeader({loggedIn}) {

  const button = loggedIn ? <Link to='/channels'>Open Eris</Link> : <Link to='/login' >Login</Link>;
  return (
    <header className='splash-header'>
      <Link to='/' className='splash-logo'><i className="fas fa-apple-alt"></i>Eris</Link>
      <div className='splash-header-links'>
        <a target='_blank' href='https://github.com/jliversi'>Github</a>
        <a target='_blank' href='https://www.linkedin.com/in/jliversi/'>LinkedIn</a>
        <a target='_blank' href=''>Portfolio Site</a>
      </div>
      {button}
    </header>
  )
}

export default SplashHeader;