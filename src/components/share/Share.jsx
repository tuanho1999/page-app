import React from "react";
import "./share.css";
import VideoCameraFront from "@mui/icons-material/VideoCameraFront";
import PermMedia from "@mui/icons-material/PermMedia";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";

function Share(props) {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8-E2761xZOnZ-gs5ZwnBrpYswloB6A_SHg&usqp=CAU"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="Tuấn ơi, bạn đang nghĩ gì thế?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption2">
            <VideoCameraFront
              className="shareIcon"
              style={{ color: "rgb(240,40,73)" }}
            />
            <span className="shareOptionText">Video trực tiếp</span>
          </div>
          <div className="shareOption1">
            <PermMedia className="shareIcon" style={{ color: "rgb(69,189,98)" }} />
            <span className="shareOptionText">Ảnh/Video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions
              className="shareIcon"
              style={{ color: "rgb(247,185,40)" }}
            />
            <span className="shareOptionText">Cảm xúc/Hoạt động</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
