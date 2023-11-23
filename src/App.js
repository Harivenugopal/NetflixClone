import React from 'react'
import Navbar from './components/navbar/Navbar'
import { orginals,action }from './urls'
import './app.css'
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={orginals} title='Netflix Oginals'/>
    <Rowpost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
