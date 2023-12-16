import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});
  const [urlId, setUrlId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`movie/popular?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      const randomMovie = response.data.results[randomIndex];
      setMovie(randomMovie);
    });
  }, []);

  const opts = {
    height: '',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

const handleMoviePlay = (id) => {
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
    if (response.data.results.length !== 0) {
      setUrlId(response.data.results[0]);
      navigate(`/playmovies/${response.data.results[0].key}`, { state: { urlId: response.data.results[0].key } });
    } else {
      console.log('Array is empty');
    }
  });
};

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ''}</h1>
        <div className="banner-buttons">

          <button className="buttonn" onClick={() => handleMoviePlay(movie.id)}>
            Play
          </button>

          {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        

          <button className="buttonn">My List</button>
        </div>
        <h4 className="description">{movie ? movie.overview : ''}</h4>
      </div>
      <div className="fadeBottom">
        
      </div>
    </div>
  );
}

export default Banner;
