import React from 'react'
import introvideo from '../Assests/introvideo.mp4';
import introbgm from '../Assests/introbgm.mp3'
import './main.css'

function Main() {
  return (
    <div className='parentdiv'>
    <video src={introvideo} type='video/mp4' className='introvideo' controls={false}  autoPlay={true} muted>
    </video>
    </div>
  )
}

export default Main
