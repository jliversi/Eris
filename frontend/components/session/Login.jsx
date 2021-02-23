import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import { useSessionForm, useDemoLogin } from '../../custom_hooks/session_hooks';

const Login = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({errors}) => errors);
  const errorClass = errors.length ? 'error' : '';

  let defaultEmail;
  if (props.location.state) {
    defaultEmail = props.location.state.email;
  } else {
    defaultEmail = '';
  }
  const [user, handleChange, handleSubmit] = useSessionForm(login, {email: defaultEmail, password: ''});
  const [demoSubmit] = useDemoLogin();
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
    return () => {
      dispatch(clearErrors());
    }
  }, []);

  return (
    <div className='session-page'>
      <Link to='/' className='splash-logo'><i className="fas fa-apple-alt"></i>Eris</Link>
      <div className='session-form-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Welcome back!</h1>
            <span>We're so excited to see you again!</span>
          </div>
          <label htmlFor='email' className={errorClass} >EMAIL <span>{errors}</span></label>
          <input className={errorClass} ref={inputEl} autoComplete='off' onChange={handleChange} type="text" name="email" value={user.email} required />
          
          <label htmlFor='password' className={errorClass} >PASSWORD <span>{errors}</span></label>
          <input className={errorClass} autoComplete='off' onChange={handleChange} type="password" name="password" value={user.password} required />
          <button>Login</button>
          <span>Need an account? <Link to={{ pathname: '/register', state: { email: user.email } }}>Register</Link></span>
          <p className='demo-login' onClick={demoSubmit}>Or try with a demo user!</p>
        </form>
      </div>
    </div>
  )
}

export default Login;