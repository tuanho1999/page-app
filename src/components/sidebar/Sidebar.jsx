import React from 'react';
import "./sidebar.css"
import HistoryIcon from '@mui/icons-material/History';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FlagIcon from '@mui/icons-material/Flag';
import MenuLink from '../menuLink/MenuLink';
import Groups from '../friend/Groups';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { Group } from '../../data';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <MenuLink Icon={<HistoryIcon/>} text="Kỷ niệm"/>
                <MenuLink Icon={<ChatBubbleOutlineIcon/>} text="Bình luận"/>
                <MenuLink Icon={<VideocamIcon/>} text="Video trực tiếp"/>    
                <MenuLink Icon={<GroupsIcon/>} text="Bạn bè"/>
                <MenuLink Icon={<BookmarkIcon/>} text="Đã Lưu"/>
                <MenuLink Icon={<ShoppingCartIcon/>} text="Marketplace"/>
                <MenuLink Icon={<EventIcon/>} text="Sự kiện"/>
                <MenuLink Icon={<StarBorderIcon/>} text="Yêu thích"/>
                <MenuLink Icon={<FlagIcon/>} text="Trang"/>
                <MenuLink Icon={<ExpandCircleDownRoundedIcon/> } text="Xem thêm"/>
                <hr className="sidebarHr" />
                <h6 className='sidebarTitle'>Lối tắt của bạn</h6>
                <ul className="sidebarFriendList">
                    {Group.map(u =>(
                    <Groups key={u.id} group={u}/>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;