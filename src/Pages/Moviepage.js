import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {action,romance,thriller,drama }from '../urls'
import Movie from '../components/Movie/Movie'


function Moviepage() {
  return (
    <div>
    <Navbar/>
    <br /><br /><br /><br />

     <Movie url={action} title='Action' isSmall />
        <Movie url={romance} title='Drama' isSmall />
        <Movie url={thriller} title='Thriller' isSmall />
        <Movie url={drama} title='Comedy' isSmall />



      
    </div>
  )
}

export default Moviepage
