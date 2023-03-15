import React from "react";
import StoryCard from "../../storyCard/StoryCard";
import "./stories.css";
import { Users } from "../../data";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';

function Stories(props) {
  return (
    <div className="stories-parents">
      <div className="stories-child">
        <div className="stories-new">
          <span className="storiesIcon">
            <AutoStoriesOutlinedIcon />
          </span>
          <p className="storiesText">Tin</p>
        </div>
        <div className="stories-new">
          <span className="storiesIcon">
            <SmartDisplayOutlinedIcon />
          </span>
          <p className="storiesText">Reels</p>
        </div>
      </div>
      <hr className="sidebarHr" />
      <div className="stories">
        <div className="storyCard">
          <div className="overlay"></div>
          <img
            src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/105898585_2748361218783040_2142583222949156089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=2FrdgkucNL8AX-GWKG7&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDw0uCjIeqlyJ8HlqJuGcB1W5tJpbIjbABwa0YjSq6qLQ&oe=6437B0BE"
            alt=""
            className="storyProfile"
          />
          <img
            src="http://cms.toptentravel.com.vn/uploads/2018/10/philadelphia_my.jpg"
            alt=""
            className="storybackground"
          />
          <img
            src="https://raw.githubusercontent.com/DesignMediaX/social-media-facebook-clone/main/public/assets/person/upload.png"
            alt=""
            className="storyadd"
          />
          <span className="text">Tạo tin</span>
        </div>
        {Users.map((u) => (
          <StoryCard key={u.id} user={u} />
        ))}
        <span className="nextIcon">
          <ArrowForwardIosOutlinedIcon />
        </span>
      </div>
    </div>
  );
}

export default Stories;
