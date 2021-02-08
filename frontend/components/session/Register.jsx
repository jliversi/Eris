import React, { useRef, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import { useSessionForm, useDemoLogin } from '../custom_hooks/session_hooks';

const Register = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector(({ errors }) => errors);
  let pwError = errors.filter(el => el[0] === 'P');
  let emailError = errors.filter(el => el[0] === 'E');
  if (pwError.length) pwError = '- ' + pwError[0];
  if (emailError.length) emailError = '- ' + emailError[0];
  const pwErrorClass = pwError.length ? 'error' : '';
  const emailErrorClass = emailError.length ? 'error' : '';
  let defaultEmail;
  
  if (props.location.state) {
    defaultEmail = props.location.state.email;
  } else {
    defaultEmail = '';
  }
  const [user, handleChange, handleSubmit] = useSessionForm(signup, {email: defaultEmail, username: '', password: ''});
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
          <h1>Create an account</h1>
          <label htmlFor='email' className={emailErrorClass}>EMAIL <span>{emailError}</span></label>
          <input className={emailErrorClass} ref={inputEl} onChange={handleChange} type="email" name="email" value={user.email} required />
          
          <label htmlFor='username'>USERNAME</label>
          <input onChange={handleChange} type="username" name="username" value={user.username} required />
          
          <label htmlFor='password' className={pwErrorClass}>PASSWORD <span>{pwError}</span></label>
          <input className={pwErrorClass} onChange={handleChange} type="password" name="password" value={user.password} required />
          <button>Register</button>
          <span><Link to={{pathname: '/login', state: {email: user.email}}}>Already have an account?</Link></span>
          <p className='demo-login' onClick={demoSubmit}>Or try with a demo user!</p>
        </form>
      </div>
    </div>
  )
}

export default Register;