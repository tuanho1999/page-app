import React from 'react';
import StoryCard from '../../storyCard/StoryCard';
import "./stories.css";
import { Users } from '../../data';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Stories(props) {
    return (
        <div className='stories'>
            <div className="storyCard">
                <div className="overlay"></div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8-E2761xZOnZ-gs5ZwnBrpYswloB6A_SHg&usqp=CAU" 
                alt="" 
                className="storyProfile" />
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8-E2761xZOnZ-gs5ZwnBrpYswloB6A_SHg&usqp=CAU" 
                alt="" 
                className="storybackground" />
                <img 
                src="https://raw.githubusercontent.com/DesignMediaX/social-media-facebook-clone/main/public/assets/person/upload.png" 
                alt="" 
                className="storyadd" />
                <span className="text">Tạo tin</span>
            </div>
           {Users.map((u)=>(
            <StoryCard key={u.id} user={u}/>
           ))}
                <span className='nextIcon'><ArrowForwardIosOutlinedIcon/></span>
        </div>
    );
}

export default Stories;