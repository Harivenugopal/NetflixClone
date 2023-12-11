import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'


function Banner() {
  const [movie, setMovie]  = useState({})

  useEffect(() =>{
    axios.get(`movie/popular?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      const randomMovie = response.data.results[randomIndex];
      setMovie(randomMovie)
  
    })
  },[])

  return (
    <div 
    style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path :""})`}}
    className='banner'>
     <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner-buttons'>
          <Link to="/playmovies">
            <button className='buttonn'>play</button>
            </Link>
            <button className='buttonn'>mylist</button>
        </div>
        <h4 className='description'>{movie ? movie.overview:"" }</h4>
     </div>
     <div className='fadeBottam'></div>
    

      
    </div>
  )
}

export default Banner
