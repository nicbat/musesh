import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Landing.css';
import { webSocketContext } from '../App';
import Button from '../Components/Button';

function Landing() {
    const navigate = useNavigate();
    const ws = React.useContext(webSocketContext); 
    useEffect(() => {
        ws.addEventListener("message", function(evt) {
            const message = JSON.parse(evt.data);
            console.log("message from server", message);
            if(message.mode && (message.mode === "groupCreate")){
                navigate("/"+message.groupId);
            }
        });
    }, []);
    return (<>
        <div className='landingWrapper'>
            <div className='Text'>
                <p>Welcome To</p>
                <h1>MuSesh</h1>
                <p>Get a quick playlist recommendation for you and your friends with just a click of a button! </p>
                <div>
                    <Button text={"click me"} onClick={()=>{ws.send(JSON.stringify({mode:"groupCreate"}))}}/>
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