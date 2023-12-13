import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import YouTube from 'react-youtube'
import './Movie.css'
import {API_KEY, imageUrl } from '../../Constants/Constants'
import axios from '../../axios'

function Movie(props) {
  const [movies, setMovies] = useState([])
  const [urlId, seturlId] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(props.url).then(response=>{
     //console.log(response.data.results[1])
      setMovies(response.data.results)
    }).catch(err=>{
    //alert('network error')
    })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
  
    if (urlId) {
      seturlId(''); 
      return; 
    }
  
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        seturlId(response.data.results[0]);
        navigate(`/playmovies/${response.data.results[0].key}`, { state: { urlId: response.data.results[0].key } });

      } else {
        console.log('array empty');
      }
    });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="rowposters">
        {movies.map((obj, index)=>

        <img key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
    {  urlId && <YouTube opts={opts} videoId={urlId.key} />  }
    </div>
  )
}

export default Movie
