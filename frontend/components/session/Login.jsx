import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { useSessionForm } from '../custom_hooks/session';

const Login = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({errors}) => errors);
  const submit = user => dispatch(login(user));
  let defaultEmail;
  if (props.location.state) {
    defaultEmail = props.location.state.email;
  } else {
    defaultEmail = '';
  }
  const [user, handleChange, handleSubmit, demoSubmit] = useSessionForm(submit, defaultEmail);


  return (
    <div className='session-page'>
      <Link to='/' className='splash-logo'><i className="fas fa-apple-alt"></i>Eris</Link>
      <div className='session-form-container'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back!</h1>
          <span>We're so excited to see you again!</span>
          <label htmlFor='email'>EMAIL</label>
          <input onChange={handleChange} type="email" name="email" value={user.email} required />
          
          <label htmlFor='password'>PASSWORD</label>
          <input onChange={handleChange} type="password" name="password" value={user.password} required />
          <button>Login</button>
          <span>Need an account? <Link to='/register'>Register</Link></span>
        </form>
        <button className='demo-login' onClick={demoSubmit}>Try with demo user</button>
      </div>
    </div>
  )
}

export default Login;