import React from 'react';
import { IconButton } from '@mui/material';
import { Users } from '../../data';
import {
    ChatBubbleOutline,
    MoreVert,
    Favorite,
    ThumbUp,
    ThumbUpAltOutlined,
    ShareOutlined,
   
  } from "@mui/icons-material";
import "./post.css"
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import { fontSize } from '@mui/system';

function Post({post}) {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <div>
                        <img src={Users.filter((u) => u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        </div>
                        <div className='postUser'>
                        <span className="postUsername">{Users.filter((u) => u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date} . <PublicRoundedIcon style={{fontSize: "small"}}/> </span> 
                        </div>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreVert className='postVertButton'/>
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                        <span className="spotText">{post.body}</span>
                        <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className='bottomLeftIcon' style={{color: "red"}}/>
                        <ThumbUp className='bottomLeftIcon' style={{color: "#011631"}} />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments 
                        </span>
                    </div>
                </div>
                <hr className="footerHr" />
                <div className="postBottomFooter">
                    <div className="postBottomFooterItem">
                        <ThumbUpAltOutlined className='footerIcon'/>
                        <span className="footerText">Like</span>
                    </div>
                    <div className="postBottomFooterItem">
                        <ChatBubbleOutline className='footerIcon'/>
                        <span className="footerText">Comment</span>
                    </div>
                    <div className="postBottomFooterItem">
                        <ShareOutlined className='footerIcon'/>
                        <span className="footerText">Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;