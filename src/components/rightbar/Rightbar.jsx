import React from 'react';
import RightBarHome from '../rightbarhome/RightBarHome';
import "./rightbar.css"

function Rightbar(props) {
    return (
        <div className='rightbar'>
           <div className="rightbarWrapper">
            <RightBarHome/>
           </div>
        </div>
    );
}

export default Rightbar;