import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { checkEmail } from '../../util/session_api_util';
import { useCheckEmail, useLoggedIn, useDemoLogin } from '../../custom_hooks/session_hooks';

function SplashInput(props) {
  const [inputOpen, email, openInput, handleChange] = useCheckEmail();
  const [loggedIn] = useLoggedIn();
  const [demoLogin] = useDemoLogin();
  const submit = (e) => {
    e.preventDefault();
    checkEmail(email).then(
      () => props.history.push('/login', { email }),
      () => props.history.push('/register', { email })
    )
  }

  const submitDemo = (e) => {
    demoLogin(e).then(() => props.history.push('/channels/@me'));
  }

  if (loggedIn) {
    return <Link to='/channels/@me' >Open Eris in your browser</Link>
  } else if (!inputOpen) {
    return (
      <div>
        <button className='demo-login' onClick={submitDemo}>Login with Demo User</button>
        <button onClick={openInput}>Open Eris in your browser</button>
      </div>
    )
  } else {
    return (
      <form className='splash-input' onSubmit={submit}>
        <input onChange={handleChange} type="email" value={email} placeholder='Enter an email' />
        <i className="fas fa-arrow-right" onClick={submit}></i>
      </form>
    )
  }
}

export default withRouter(SplashInput);