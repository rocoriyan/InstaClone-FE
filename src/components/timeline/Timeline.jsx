import React from 'react';
import "./Timeline.css";
import PostContainer from '../timelineComp/postContainer';

const Timeline = ({ posts, user }) => {

    return (
        <div className="timeline-wrapper">
            <div className="sidebar">
                <h1 className="logo">InstaPics</h1>
                <h2>Logged in as {user.username}</h2>
            </div>
            <div className="timeline">
                {posts.map((post, user, index) => {
                    return (
                        <PostContainer username={user.username} image={post.image} description={post.description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Timeline
