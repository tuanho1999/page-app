import React from 'react';
import "./storyCard.css"

function StoryCard({user}) {
    return (
        <div className='storyCard'>
            <div className="overlay"></div>
            <img 
                src={user.profilePicture}
                alt="" 
                className="storyProfile" />
                <img 
                src={user.photo}
                alt="" 
                className="storybackground" />
                <span className="text">{user.username}</span>
        </div>
    );
}

export default StoryCard;