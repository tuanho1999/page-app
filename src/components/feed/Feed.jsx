import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import Stories from '../stories/Stories';
import { Posts } from '../../data';

import "./feed.css"

function Feed() {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Stories/>
                <Share/>
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))
                }
            </div>
        </div>
    );
}

export default Feed;