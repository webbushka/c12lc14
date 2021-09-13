import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from './Logo.js';
import './styles/NavBar.css';

const NavBar = () => {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/register');
  }
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__nav">
        <li>
          <Link to="ducks" className="navbar__link">
            Ducks
          </Link>
        </li>
        <li>
          <Link to="my-profile" className="navbar__link">
            My profile
          </Link>
        </li>
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
