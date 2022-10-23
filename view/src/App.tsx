import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import SelectSongs from './Pages/SelectSongs';
import GroupCreation from './Pages/GroupCreation';
import Songs from './Pages/Songs';


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

  const [recomendedSongs, setRecomendedSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

  return (
    <webSocketContext.Provider value={ws}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login/:groupId" element={<Login recomendedSongs={recomendedSongs} setRecomendedSongs={setRecomendedSongs}/>}/>
          <Route path="/group/:groupId" element={<GroupCreation/>}/>
          <Route path="/select/:groupId" element={<SelectSongs selectedSongs={selectedSongs} setSelectedSongs={setRecomendedSongs} recomendedSongs={recomendedSongs} setRecomendedSongs={setRecomendedSongs}/>}/>
          <Route path="/songs/:groupId" element={<Songs selectedSongs={selectedSongs}/>}/>
          <Route path="*" element={<>404: NOT FOUND</>}/>
        </Routes>
      </Router>
    </webSocketContext.Provider>
  );
}

export default App;
