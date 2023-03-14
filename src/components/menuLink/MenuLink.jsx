import React from 'react';
import "./menuLink.css"

function MenuLink({Icon,text}) {
    return (
        <div className='menuLink'>
            {Icon}
            <span className="menuLinkText">{text}</span>
        </div>
    );
}

export default MenuLink;