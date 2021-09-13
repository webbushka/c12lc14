import React from 'react';
import PropTypes from 'prop-types';
import LogoDuck from '../images/logo.png';
import './styles/Logo.css';

const Logo = ({ title }) => {
  return (
    <div className="logo">
      <div className="logo__container">
        <img className="logo__image" src={LogoDuck} alt="CryptoDucks logo" />
        {title && <p className="logo__title">{title}</p>}
      </div>
    </div>
  );
};

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
