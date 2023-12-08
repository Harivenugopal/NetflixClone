import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { orginals,action,romance }from '../urls'
import Banner from '../components/Banner/Banner'
import Rowpost from '../components/Rowpost/Rowpost'
import "../app.css"



function secondpage() {
  return (
    <div className='secondpageparentdiv'>
      <Navbar/>
      <Banner/>
    <Rowpost url={orginals} title='Netflix Oginals'/>
    <Rowpost url={action} title='Action' isSmall />
    <Rowpost url={romance} title='Comedy' isSmall />
    </div>
  )

}

export default secondpage
