import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Logo from './Logo.js';
import * as duckAuth from '../duckAuth.js';
import './styles/Login.css';

const Login = ({ handleChange, handleLogin, formState }) => {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const { username, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return false;

    duckAuth
      .authorize(username, password)
      .then((data) => {
        if (!data) {
          return setMessage('Something went wrong, please try again.');
        }

        if (data.jwt) {
          setMessage('');
          handleLogin();
          history.push('/ducks', { newRegistration: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div onSubmit={handleSubmit} className="login">
      <Logo title={'CryptoDucks'} />
      <p className="login__welcome">
        This app contains highly sensitive information. Please sign in or
        register to access CryptoDucks.
      </p>
      <p className="login__error">{message}</p>
      <form className="login__form">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          required
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          required
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Log in
          </button>
        </div>
      </form>

      <div className="login__signup">
        <p>Not a member yet?</p>
        <Link to="/register" className="signup__link">
          Sign up here
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  formState: PropTypes.shape({
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
