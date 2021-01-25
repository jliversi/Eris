import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/session_actions';
import useLoginForm from '../custom_hooks/useLoginForm';

const Login = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({errors}) => errors);
  const submit = user => dispatch(login(user));
  const [user, handleChange, handleSubmit] = useLoginForm(submit);


  return (
    <div className='session-page'>
      <div className='session-form-container'>
        <form onSubmit={handleSubmit}>
          <p>{errors}</p>
          <input onChange={handleChange} type="text" name="email" value={user.email} />
          <input onChange={handleChange} type="text" name="password" value={user.password} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )




}

export default Login;