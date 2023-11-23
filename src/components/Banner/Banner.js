import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'


function Banner() {
  const [movie, setMovie]  = useState({})

  useEffect(() =>{
    axios.get(`movie/popular?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[1])
    })
  },[])
  
  return (
    <div className='banner'>
     <div className='content'>
        <h1 className='title'>{movie.title}</h1>
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
