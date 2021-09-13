import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="./login" />
      }
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired, // should be a react component
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
