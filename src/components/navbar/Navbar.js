import React from 'react'
import  avatar from '../Assests/avatar.png'
import netflixlogo from '../Assests/netflixlogo.png'
import searchicon from '../Assests/searchicon.png'
import notification from '../Assests/notification.png'
import "./Navbar.css";


function Navbar(){
  return (
    <div className='navbar'>
        <button type="button" className='home'>HOME </button>
        <button type="button" className='movieslist'>MOVIES</button>

        <img className='logo' src={netflixlogo} alt="netflix logo" />
        <img className='avatar' src={avatar} alt="avatar logo" />
        <div className="searchContainer">
        <input type="text" placeholder='    Search...' name='Search' className='netflixsearch' />
        <img   className='submitbutton' src={searchicon} alt="search icon" />
         <img  className='notification' src={notification} alt="" />
      </div>
    </div>
  )
}

export default Navbar
