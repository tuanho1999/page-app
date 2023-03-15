import React from 'react';
import "./messonl.css"

function MessOnl({onlineuser}) {
    return (
      
            <div className='MessList'>
            <li className="messFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={onlineuser.profilePicture} alt="" className="userProfileImg" />
                    <span className="Online"></span>
                </div>
                <div className='userInbox'>
                    <div>
                <span className="usernameMess">{onlineuser.username}</span>
                    </div>
                    <div>
                    <p className='inboxbody'>{onlineuser.mess}</p>
                    </div>
                </div>
            </li>
        </div>
       
    );
}

export default MessOnl;