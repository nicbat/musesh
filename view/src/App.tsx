import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import CreateGroup from './Pages/CreateGroup';
import Group from './Pages/Group';
import SelectSongs from './Pages/SelectSongs';


const ws = new WebSocket('ws://localhost:8080/', 'echo-protocol');
export const webSocketContext = React.createContext(ws);
function App() {
  React.useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    }
  
    ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      console.log("message from server", message);
    }
    ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
    }
  }, []);

  return (
<<<<<<< Updated upstream
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateGroup/>}/>
        <Route path="/:groupId" element={<Group/>}/>
        <Route path="/test" element={<SelectSongs/>}/>
        <Route path="*" element={<>404: NOT FOUND</>}/>
      </Routes>
    </Router>
=======
    <webSocketContext.Provider value={ws}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create" element={<CreateGroup/>}/>
          <Route path="/:groupId" element={<Group/>}/>
          <Route path="*" element={<>404: NOT FOUND</>}/>
        </Routes>
      </Router>
    </webSocketContext.Provider>
>>>>>>> Stashed changes
  );
}

export default App;
