import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Pages/Landing';
import SpotifyLink from './Pages/SpotifyLink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/spotify" element={<SpotifyLink/>}/>
        <Route path="*" element={<>404: NOT FOUND</>}/>
      </Routes>
    </Router>
  );
}

export default App;
