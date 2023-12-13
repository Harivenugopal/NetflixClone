import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import First from './Pages/First';
import Secondpage from './Pages/Secondpage';
import Avatarpage from './Pages/Avatarpage';
import Playmovies from './Pages/Playmovies';
import Moviepage from './Pages/Moviepage';

function App() {
  return (
    <div className="App">
    <Router>

    <Routes>
    <Route path="/" element={<First/>} />
    <Route path="/secondpage" element={<Secondpage />} />
    <Route path="/avatarpage" element={<Avatarpage />} />
    <Route path="/playmovies/*" element={<Playmovies />} />
    <Route path="/moviespage/*" element={<Moviepage />} />


  </Routes>

    </Router>

    </div>
  );
}

export default App;
