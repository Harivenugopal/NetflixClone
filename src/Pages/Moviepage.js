import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {action,romance,thriller,drama }from '../urls'
import Rowpost from '../components/Rowpost/Rowpost'

function Moviepage() {
  return (
    <div>
    <Navbar/>
    <br/><br/><br/>     <br/>


     <Rowpost url={action} title='Action' isSmall />
        <Rowpost url={romance} title='Drama' isSmall />
        <Rowpost url={thriller} title='Thriller' isSmall />
        <Rowpost url={drama} title='Comedy' isSmall />



      
    </div>
  )
}

export default Moviepage
