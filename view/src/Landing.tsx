import React from 'react';
import ReactDOM from 'react-dom/client';
import './Landing.css';
function Landing(){
    return(<>
        <div className='wrapper'>
        <div className='Text'>
            <p>Welcome To</p>
            <h1>MuSesh</h1>
            <p>Get a quick playlist recommendation for you and your friends with just a click of a button! </p>
        </div>
        <div className='headphones'>
            <img src={require('./images/headphone.png')}></img>
        </div>
        </div>
        </>
    );
}
export default Landing;