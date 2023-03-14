import React from 'react';
import "./groups.css"

function Groups({group}) {
    return (
        <div>
            <li className="sidebarGroup">
                <img src={group.photo} alt="" className="sidebarGroupImg" />
                <span className="sidebarGroupName">{group.groupname}</span>
            </li>
        </div>
    );
}

export default Groups;