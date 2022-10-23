import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../Components/ButtonLink';
import '../Styles/Landing.css';

function Landing() {
    const navigate = useNavigate();
    const navigateToCreation = () => {
    // 👇️ navigate to /contacts
    navigate('/GroupCreation');
  };
    return (<>
        <div className='landingWrapper'>
            <div className='Text'>
                <p>Welcome To</p>
                <h1>MuSesh</h1>
                <p>Get a quick playlist recommendation for you and your friends with just a click of a button! </p>
                <div>
                    <ButtonLink text={"click me"} to="login"/>
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