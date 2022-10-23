import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import CreateGroup from './Pages/CreateGroup';


const ws = new WebSocket('ws://localhost:8080/', 'echo-protocol');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:groupId" element={<CreateGroup/>}/>
        <Route path="*" element={<>404: NOT FOUND</>}/>
      </Routes>
    </Router>
  );
}

export default App;
