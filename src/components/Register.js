import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Logo from './Logo.js';
import * as duckAuth from '../duckAuth.js';
import './styles/Register.css';

const Register = ({ handleChange, formState }) => {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const { confirmPassword, username, password, email } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      duckAuth.register(username, password, email).then((res) => {
        if (res) {
          setMessage('');
          history.push('/ducks');
        } else {
          setMessage('Something went wrong, please try again.');
        }
      });
    }
  };

  return (
    <div className="register">
      <Logo title={'CryptoDucks'} />
      <p className="register__welcome">Please register.</p>
      <p className="register__error">{message}</p>
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="username">Username:</label>
        <input
          required
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          required
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Sign up
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Already a member?</p>
        <Link to="login" className="register__login-link">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

Register.propTypes = {
  formState: PropTypes.shape({
    confirmPassword: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Register;
