import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, useParams } from 'react-router-dom';
import { webSocketContext } from '../App';
import Button from '../Components/Button';
import '../Styles/Login.css';
function Login(recomendedSongs:React.MutableRefObject<[]>){
    const navigate = useNavigate();
    const {groupId} = useParams();
    const getTopSong = async () =>{
        await fetch('http://localhost:5000/generate', {
            method: 'GET',
        }).then((data)=>{
            return data;
        }).then((response)=>{
            console.log(response);
        });
    }
    const ws = React.useContext(webSocketContext); 
    useEffect(() => {
        ws.addEventListener("message", function(evt) {
            const message = JSON.parse(evt.data);
            console.log("message from server", message);
            if(message.mode && (message.mode === "recomendedSongs")){
                recomendedSongs = message.recomendedSongs;
                navigate("/songs/"+message.groupId);
            }
        });
    }, []);
    
    return(<>
        <div className='wrapper'>
            <div className='leftSide'>
            <h3>Enter your Spotify link:</h3>
            <input type="text" id="link" name="userlink"></input><br></br>
            <Button text={"next"} onClick={()=>{
                getTopSong();
                navigate("/select/"+groupId);
            }}/>
            </div>
            
            <div className='spotifyIcon'>
            <img src={require('../images/spotify.png')}></img>
            </div>
            
        </div>
        </>
    );
}
export default Login;