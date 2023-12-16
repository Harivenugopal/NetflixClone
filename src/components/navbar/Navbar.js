import React from 'react';
import { useNavigate } from 'react-router-dom';

import menubar from '../Assests/menubar.png'
import avatar from '../Assests/avatar.png';
import netflixlogo from '../Assests/netflixlogo.png';

import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate('/secondpage');
  };

  const onLogoClick = () => {
    navigate('/');
  };

  const onAvatarClick = () =>{
    navigate('/avatarpage')
  }

  const onMoviesClick = () =>{
    navigate('/moviespage')
  }



  return (
    <nav>
      <input type="checkbox" id='check' />
      <label For="check" className='checkbtn'>
        <i className="" > <img src={menubar} className='menubarpic' alt="" /> </i>
      </label>


      <img className="logo" src={netflixlogo} alt="netflix logo" onClick={onLogoClick} />
      <img className="avatar" src={avatar} alt="avatar logo" onClick={onAvatarClick} />
      <input  type="text" placeholder="    Search..." name="Search" className="netflixsearch"/>
       <ul className='menulist' > 
      <li className="menu"  onClick={onHomeClick}>HOME</li>
     <li className="menu"  onClick={onMoviesClick}> MOVIES </li>
     </ul>


     </nav>
    
  );
}

export default Navbar;
