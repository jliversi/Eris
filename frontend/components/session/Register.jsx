import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { useSessionForm } from '../custom_hooks/session';

const Register = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({ errors }) => errors);
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
          <label>EMAIL
            <input onChange={handleChange} type="email" name="email" value={user.email} required />
          </label>
          <label>PASSWORD
            <input onChange={handleChange} type="password" name="password" value={user.password} required />
          </label>
          <button>Login</button>
          <Link to='/login'>Already have an account?</Link>
          <button className='demo-login' onClick={demoSubmit}>Try with demo user</button>
        </form>
      </div>
    </div>
  )
}

export default Register;