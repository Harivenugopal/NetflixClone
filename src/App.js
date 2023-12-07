import React from 'react'
  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './app.css'
import First from './Pages/First';
import Secondpage from './Pages/Secondpage';


function App() {
  return (
    <div className="App">
    <Router>

    <Routes>
    <Route path="/" element={<First/>} />
          <Route path="/secondpage" element={<Secondpage />} />
    </Routes>

    </Router>

    </div>
  );
}

export default App;
