import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/SpotifyLink.css';
function SpotifyLink(){
    return(<>
        <div className='wrapper'>
            <div className='input'>
            <h3>Enter your Spotify link:</h3>
            <input type="text" id="link" name="userlink"></input><br></br>
            <button type="button">Next</button>
            </div>

            <div className='spotifyIcon'>
            <img src={require('./images/spotify.png')}></img>
            </div>
            
        </div>
        </>
    );
}
export default SpotifyLink;