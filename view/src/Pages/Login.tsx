import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import '../Styles/Login.css';
function Login(){
    const getTopSong = async () =>{
        await fetch('http://localhost:5000/generate', {
            method: 'GET',
        }).then((data)=>{
            return data;
        }).then((response)=>{
            console.log(response);
        });
    }
    return(<>
        <div className='wrapper'>
            <div className='leftSide'>
            <h3>Enter your Spotify link:</h3>
            <input type="text" id="link" name="userlink"></input><br></br>
            <Button text={"next"} onClick={()=>{
                getTopSong()
                navigate
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