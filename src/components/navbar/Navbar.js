import React from 'react'
import "./Navbar.css";

function Navbar(){
  return (
    <div className='navbar'>
        <button type="button" className='home'>Home </button>
        <img className='logo' src="https://img.icons8.com/?size=48&id=20519&format=png" alt="netflix logo" />
        <img className='avatar' src="https://img.icons8.com/?size=48&id=23243&format=png" alt="avatar logo" />
        <div className="searchContainer">
        <input type="text" placeholder='Search...' name='Search' className='netflixsearch' />
        <button type='submit' className='submitbutton'>Submit</button>
         <button className='notification'><img src="https://icons8.com/icon/fcG5IOptfh58/bell" alt="notification" /></button>
      </div>
    </div>
  )
}

export default Navbar
