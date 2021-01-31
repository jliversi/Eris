import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import useLoginForm from '../custom_hooks/useLoginForm';

const Login = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({errors}) => errors);
  const submit = user => dispatch(login(user));
  const [user, handleChange, handleSubmit, demoSubmit] = useLoginForm(submit);


  return (
    <div className='session-page'>
      <div className='session-form-container'>
        <form onSubmit={handleSubmit}>
          <label>EMAIL OR PHONE NUMBER
            <input onChange={handleChange} type="email" name="email" value={user.email} required />
          </label>
          <label>PASSWORD
            <input onChange={handleChange} type="password" name="password" value={user.password} required />
          </label>
          <button>Login</button>
          <span>Need an account? <Link to='/register'>Register</Link></span>
        </form>
        <button className='demo-login' onClick={demoSubmit}>Try with demo user</button>
      </div>
    </div>
  )




}

export default Login;