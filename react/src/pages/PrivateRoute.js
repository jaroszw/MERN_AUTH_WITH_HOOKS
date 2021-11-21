import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loading from './../components/Loading';

export default function PrivateRoute(props) {
  const { isLoading, currentUser } = useSelector((state) => state.user);

  const { component: Component, ...rest } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (currentUser) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
}
