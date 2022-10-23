import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/GroupCreation.css';
import Button from '../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonLink from '../Components/ButtonLink';

function GroupCreation(){
    const {groupId} = useParams();
    return(
        <>
        <div className='wrapper'>
            <div className='decoration'>
                <h1>Add People to Your Session</h1>
                <img src={require('../images/frame.png')}></img>
                <div className='btn'>
                <ButtonLink text = {"Next"} to={'/login/'+groupId}></ButtonLink>
                </div>
            </div>

            <div className='names'>
                <h4>Your Sesh</h4>
                
                <div className='User1'>
                    <h5> Jessica Jones</h5>
                </div>

                <div className='User2'>
                    <h5> Ryan Reynolds</h5>
                </div>
                
                <div className='User3'>
                    <h5> Elon Musk</h5>
                </div>

            </div>
        </div>
        </>
    )
}
export default GroupCreation;