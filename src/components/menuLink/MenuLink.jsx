import React from 'react';
import "./menuLink.css"

function MenuLink({Icon,text}) {
    return (
        <div className='menuLink'>
            <img src={Icon} alt="" className='sidebarIcon'/>
            <span className="menuLinkText">{text}</span>
        </div>
    );
}

export default MenuLink;