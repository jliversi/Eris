import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { checkEmail } from '../../util/session_api_util';
import { useCheckEmail, useLoggedIn } from '../custom_hooks/session';

function SplashInput(props) {
  const [inputOpen, email, openInput, handleChange] = useCheckEmail();
  const [loggedIn] = useLoggedIn();
  const submit = (e) => {
    e.preventDefault();
    checkEmail(email).then(
      () => props.history.push('/login', { email }),
      () => props.history.push('/register', { email })
    )
    
  }

  if (loggedIn) {
    return <Link to='/channels' >Open Eris in your browser</Link>
  } else if (!inputOpen) {
    return (<button onClick={openInput}>Open Eris in your browser</button>)
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