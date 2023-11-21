import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
     <div className='content'>
        <h1 className='title'>movie name</h1>
        <div className='banner-buttons'>
            <button className='buttonn'>play</button>
            <button className='buttonn'>mylist</button>
        </div>
        <h4 className='description'>In a small coastal town nestled between rolling hills and the vast expanse of the ocean,
         life unfolded at its own leisurely pace. The cobblestone streets meandered through the heart of the community,</h4>
     </div>
     <div className='fadeBottam'></div>
    

      
    </div>
  )
}

export default Banner
