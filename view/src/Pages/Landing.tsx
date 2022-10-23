import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../Components/Button';
import SongTile from '../Components/SongTile';
import '../Styles/Landing.css';
function Landing() {
    return (<>
        <div className='wrapper'>
            <div className='Text'>
                <p>Welcome To</p>
                <h1>MuSesh</h1>
                <p>Get a quick playlist recommendation for you and your friends with just a click of a button! </p>
                <div>
                    <Button text={"click me"} onClick={(e: any) => {
                        console.log(e);
                    }}/>
                </div>
                {/* <SongTile artist="Taylor Swift" album="midnights" title="Karma" image="http://localhost:3000/static/media/headphones.712a9fe3b82e5fc1e5fc.png"/> */}
            </div>
            <div className='headphones'>
                <img src={require('../images/headphone.png')}></img>
            </div>
        </div>
    </>
    );
}
export default Landing;