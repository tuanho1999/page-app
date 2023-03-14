import React from 'react';
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

function Navbar(props) {
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <img 
                className='facebookLogo'
                src='https://links.papareact.com/5me'
                layout="fixed"/>
                <div className='searchBar'>
                   <SearchIcon className='searchIcon'/>
                   <input 
                   type="text" 
                   placeholder='Tìm kiếm trên FaceBook'
                   className='searchInput'/>
                </div>
            </div>
            <div className='navbarCenter'>
                <div data-toggle="tooltip" data-placement="bottom" title="Trang chủ">
                    <HomeIcon className='centerIcon' />
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Watch">
                    <OndemandVideoIcon className='centerIcon'/>
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Marketplace">
                    <StorefrontIcon className='centerIcon'/>
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Nhóm">
                    <GroupsIcon className='centerIcon'/>
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Trò chơi">
                    <VideogameAssetIcon className='centerIcon'/>
                </div>
            </div>
            <div className='navbarRight'>
                <div className='navbarIcons'>
                    <div className="navbarIconItem" data-toggle="tooltip" data-placement="bottom" title="Menu">
                        <AppsIcon />
                       
                    </div>
                    <div className="navbarIconItem" data-toggle="tooltip" data-placement="bottom" title="Messenger">
                        <ChatBubbleIcon/>
                        <span className="navbarIconBadge">3</span>
                    </div>
                    <div className="navbarIconItem" data-toggle="tooltip" data-placement="bottom" title="Thông báo">
                        <NotificationsActiveRoundedIcon/>
                        <span className="navbarIconBadge">8</span>
                    </div>
                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8-E2761xZOnZ-gs5ZwnBrpYswloB6A_SHg&usqp=CAU' 
                alt='' 
                className='navbarImg' data-toggle="tooltip" data-placement="bottom" title="Tài khoản"/>
            </div>
        </div>
    );
}

export default Navbar;