import React from 'react'
import { Link } from 'react-router-dom'
import './Avatar.css'
import netflixlogo from '../Assests/netflixlogo.png'

function Avatar() {
  return (
    <div className='bodyimage'>
      <Link to="/"> 
      <img className='netflixlogo' src={netflixlogo} alt="netflixlogo" />
      </Link>
       <div className='textcontainer'> 
      <div className='text'> 
      <h1 className='text1'>Unlimted movies, TV <br /> shows and more</h1>
      <h4 className='text2'>Watch anywhere.Any time</h4>
      <br />
      <Link to="/secondpage"> 
      <button className='button1'>Enjoy free trial</button>
      </Link>
      </div>  
    </div>
    </div>
  );
};

export default Avatar
