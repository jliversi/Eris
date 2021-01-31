import React from 'react';

import { Link } from 'react-router-dom';


function SplashInput({ loggedIn }) {

  // will take a username, sign the user up but with "registration_complete" set to false
  // make migration adding registration complete field for users (default falser)
  // go to regular signup and make it also send "registration_complete: true"

  // temp version:
  const path = loggedIn ? '/channels' : '/login'
  return <Link to={path} >Open Eris in your browser</Link>
}

export default SplashInput;