import React from 'react';
import { Usersonline } from '../../data';
import Online from '../online/Online';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import "./rightbarhome.css"

function RightBarHome(props) {
    return (
        <div className='rightbarhome'>
            <h5>Được tài trợ</h5>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypmeHz_gMg1_5NfcgBHqqYHeHueOwEgX6zA&usqp=CAU" 
            alt="" 
            className="rightbarAdvert" />
            <hr className="shareHrs" />
            <h6 className="rightbarTitle">Sinh nhật</h6>
            <div className="birthdayContainer">
                <img 
                src="https://raw.githubusercontent.com/DesignMediaX/social-media-facebook-clone/main/public/assets/birthdaygifts/gift.png" 
                alt="" 
                className="birthdayImg" />
                <span className="birthdayText">
                    <b>Lan Dinh</b> và <b>một vài người bạn khác </b> có ngày sinh nhật hôm nay
                </span>
            </div>
            <hr className="shareHrs" />
            <div className='rightbarTitles'>
                <h6 className="rightbarTitle">Người liên hệ</h6>
                <div data-toggle="tooltip" data-placement="bottom" title="Cuộc gọi mới">
                    <VideoCallIcon className='rightbarTitleIcon' />
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Tìm kiếm theo tên hoặc nhóm">
                    <SearchIcon className='rightbarTitleIcon'/>       
                </div>
                <div data-toggle="tooltip" data-placement="bottom" title="Tùy chọn">              
                    <MoreHorizIcon className='rightbarTitleIcon'/>
                </div>
            </div>
            <ul className="rightbarFriendList">
                {Usersonline.map((u) => (
                <Online key={u.id} onlineuser={u} />
                ))}
            </ul>
     
        </div>
    );
}

export default RightBarHome;