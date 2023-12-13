import React from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';

import './Play.css';

function Play() {
  const location = useLocation();

  const urlId = location.state && location.state.urlId;


  const opts = {
    height: '420px',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='parentplaydiv'>
      <h2>Video Player</h2>
      <YouTube videoId={urlId} opts={opts} />
      <div className='content'></div>
      <div className='fadeBottam'></div>
    </div>
  );
}

export default Play;
