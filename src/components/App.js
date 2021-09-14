import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Ducks from './Ducks.js';
import MyProfile from './MyProfile.js';
import ProtectedRoute from './ProtectedRoute';
import * as duckAuth from '../duckAuth.js';
import './styles/App.css';

const App = () => {
  const jwt = localStorage.getItem('jwt');
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [formState, setFormState] = useState({
    confirmPassword: '',
    username: '',
    password: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    if (jwt) {
      duckAuth.getContent(jwt).then((res) => {
        if (res) {
          const userData = {
            username: res.username,
            email: res.email,
          };
          setLoggedIn(true);
          setUserData(userData);
          history.push('/ducks');
        }
      });
    }
  }, [history, jwt]);

  return (
    <Switch>
      <ProtectedRoute path="/ducks" loggedIn={loggedIn} component={Ducks} />
      <ProtectedRoute
        path="/my-profile"
        loggedIn={loggedIn}
        userData={userData}
        component={MyProfile}
      />
      <Route path="/login">
        <div className="loginContainer">
          <Login
            formState={formState}
            handleChange={handleChange}
            handleLogin={() => setLoggedIn(true)}
          />
        </div>
      </Route>
      <Route path="/register">
        <div className="registerContainer">
          <Register formState={formState} handleChange={handleChange} />
        </div>
      </Route>
      <Route>{<Redirect to={`/${loggedIn ? 'ducks' : 'login'}`} />}</Route>
    </Switch>
  );
};

export default App;
