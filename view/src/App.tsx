import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import CreateGroup from './Pages/CreateGroup';
import Group from './Pages/Group';
import SelectSongs from './Pages/SelectSongs';


const ws = new WebSocket('ws://localhost:8080/', 'echo-protocol');
const webSocketContext = React.createContext(ws);
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/GroupCreation" element={<GroupCreation/>}/>
        <Route path="/:groupId" element={<Group/>}/>
        <Route path="/test" element={<SelectSongs/>}/>
        <Route path="*" element={<>404: NOT FOUND</>}/>
      </Routes>
    </Router>
  );
}

export default App;
