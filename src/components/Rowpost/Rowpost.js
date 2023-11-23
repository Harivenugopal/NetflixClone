import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import {imageUrl } from '../../Constants/Constants'
import axios from '../../axios'

function Rowpost(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
    //alert('network error')
    })
  },[props.url])
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="rowposters">
        {movies.map((obj, index)=>

        <img key={index} className={props.isSmall ?'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}

        
      </div>
    </div>
  )
}

export default Rowpost
