import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { orginals,action,romance }from '../urls'
import Play from '../components/Play/Play'
import Rowpost from '../components/Rowpost/Rowpost'
import "../app.css"

function Playmovies() {
  return (
    <div>
        <Navbar/>
        <Play/>
        <Rowpost url={orginals} title='Netflix Oginals'/>
        <Rowpost url={action} title='Action' isSmall />
        <Rowpost url={romance} title='Comedy' isSmall />
      
    </div>
  )
}

export default Playmovies
