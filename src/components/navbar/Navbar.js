import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../Assests/avatar.png';
import netflixlogo from '../Assests/netflixlogo.png';
import searchicon from '../Assests/searchicon.png';
import notification from '../Assests/notification.png';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate('/secondpage');
  };

  const onMoviesClick = () => {
    navigate('/');
  };

  const onAvatarClick = () =>{
    navigate('/avatarpage')
  }

  return (
    <div className="navbar">
      <button type="button" className="home" onClick={onHomeClick}>
        HOME
      </button>
      <button type="button" className="movieslist">
        MOVIES
      </button>

      <img className="logo" src={netflixlogo} alt="netflix logo" onClick={onMoviesClick} />
      <img className="avatar" src={avatar} alt="avatar logo" onClick={onAvatarClick} />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="    Search..."
          name="Search"
          className="netflixsearch"
        />
        <img className="submitbutton" src={searchicon} alt="search icon" />
        <img className="notification" src={notification} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
