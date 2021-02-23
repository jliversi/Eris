import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { useLoggedIn } from '../custom_hooks/session_hooks';


const Auth = ({ component: Component, path, exact }) => {
  const [loggedIn] = useLoggedIn();
  return (
    <Route exact={exact} path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/channels/@me" />
        )
    )} />
  )
};

const Protected = ({ component: Component, path, exact }) => {
  const [loggedIn] = useLoggedIn();
  return (
    <Route exact={exact} path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    )} />
  )
};


export const AuthRoute = withRouter(Auth);
export const ProtectedRoute = withRouter(Protected);