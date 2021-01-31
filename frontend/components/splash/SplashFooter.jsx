import React from 'react';
import { Link } from 'react-router-dom';


function SplashFooter({ loggedIn }) {

  const button = loggedIn ? <Link to='/channels'>Open Eris</Link> : <Link to='/register' >Sign up</Link>;
  return (
    <footer className='splash-footer'>
      <div>
        <div className='footer-links'>
          <div>
            <h1><a target='_blank' href='https://github.com/jliversi/Eris'>Click for source code</a></h1>
            <p>This app is a clone of of the popular Discord and serves simply as a showcase of my full-stack web development skills.</p>
          </div>
          <ul>
            <li>Features</li>
            <li>Full authentication</li>
            <li>Create servers/channels</li>
            <li>Live chat</li>
            <li>File upload + Preview</li>
          </ul>
          <ul>
            <li>Tech used</li>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Redux</li>
            <li>SCSS</li>
            <li>PostgreSQL</li>
            <li>AWS S3</li>
          </ul>
          <ul>
            <li>More 'bout me</li>
            <li><a target='_blank' href='https://github.com/jliversi'>Github</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/jliversi/'>LinkedIn</a></li>
            <li><a target='_blank' href=''>Portfolio Site</a></li>
          </ul>
          <ul>
            <li>Other projects</li>
            <li>Sudoku Solver</li>
            <li>Conway Prev State Finder</li>
          </ul>
        </div>
        <div className='footer-buttons'>
          <Link to='/' className='splash-logo'><i className="fas fa-apple-alt"></i>Eris</Link>
          {button}
        </div>
      </div>
    </footer>
  )
}

export default SplashFooter;