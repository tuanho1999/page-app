import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Usersonline } from '../../data';
import MessOnl from "../messonl/MessOnl";

function Navbar(props) {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img
          className="facebookLogo"
          src="https://links.papareact.com/5me"
          layout="fixed"
        />
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Tìm kiếm trên FaceBook"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarCenter">
        <div data-toggle="tooltip" data-placement="bottom" title="Trang chủ">
          <HomeIcon className="centerIcon" />
        </div>
        <div data-toggle="tooltip" data-placement="bottom" title="Watch">
          <OndemandVideoIcon className="centerIcon" />
        </div>
        <div data-toggle="tooltip" data-placement="bottom" title="Marketplace">
          <StorefrontIcon className="centerIcon" />
        </div>
        <div data-toggle="tooltip" data-placement="bottom" title="Nhóm">
          <GroupsIcon className="centerIcon" />
        </div>
        <div data-toggle="tooltip" data-placement="bottom" title="Trò chơi">
          <VideogameAssetIcon className="centerIcon" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarIcons">
          <div className="dropdown">
            <div
              className="navbarIconItem"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Menu"
            >
              <AppsIcon />
            </div>
            <div className="dropdown-content"></div>
          </div>
          <div className="dropdown">
            <div
              className="navbarIconItem"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Messenger"
            >
              <i class="fa fa-comment" aria-hidden="true"></i>
              <span className="navbarIconBadge">3</span>
            </div>
            <div className="dropdown-content">
              <div className="messHead">
                <div className="messTitle">
                  <h3>Chat</h3>
                </div>
                <div className="messIcon">
                  <span className="messIcons">
                    <MoreHorizIcon />
                  </span>
                  <span className="messIcons">
                    <ZoomOutMapIcon />
                  </span>
                  <span className="messIcons">
                    <VideoCallIcon />
                  </span>
                  <span className="messIcons">
                    <BorderColorIcon />
                  </span>
                </div>
              </div>
              <div className="messSearch">
                <span className="iconSearch">
                  <SearchIcon />
                </span>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Tìm kiếm trên Messenger"
                />
              </div>
              <div className="messOption">
                <div className="inbox">
                  <b className="inboxText"> Hộp thư </b>
                </div>
                <div className="inbox">
                  <b className="community"> Cộng đồng </b>
                </div>
              </div>
              <div className="messBody">
                {Usersonline.map((u) => (
                  <MessOnl key={u.id} onlineuser={u}/>
                ))}
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div
              className="navbarIconItem"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Thông báo"
            >
              <NotificationsActiveRoundedIcon />
              <span className="navbarIconBadge">8</span>
            </div>
            <div className="dropdown-content"></div>
          </div>
        </div>
        <img
          src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/105898585_2748361218783040_2142583222949156089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=2FrdgkucNL8AX-GWKG7&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDw0uCjIeqlyJ8HlqJuGcB1W5tJpbIjbABwa0YjSq6qLQ&oe=6437B0BE"
          alt=""
          className="navbarImg"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Tài khoản"
        />
      </div>
    </div>
  );
}

export default Navbar;
