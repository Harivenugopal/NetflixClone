import React from 'react'
import { Link } from 'react-router-dom'
import './Avatar.css'
import netflixlogo from '../Assests/netflixlogo.png'

function Avatar() {
  return (
    <div className='bodyimage'>
      <Link to="/secondpage"> 
      <img className='netflixlogo' src={netflixlogo} alt="netflixlogo" />
      </Link>
       <div className='textcontainer'> 
      <div className='text'> 
      <h1 className='text1'>Unlimted movies, TV <br /> shows and more</h1>
      </div>


      
    </div>
    </div>
  )
}

export default Avatar
