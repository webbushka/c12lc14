import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar.js';
import './styles/MyProfile.css';

const MyProfile = ({ userData }) => {
  let { username, email } = userData;

  return (
    <>
      <NavBar />
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>My profile</p>
            <hr className="my-profile__rule" />
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Username:</p>
              <p className="my-profile__value">{username}</p>
            </div>
            <div className="my-profile__user">
              <p className="my-profile__key">Email:</p>
              <p className="my-profile__value">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyProfile.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyProfile;
