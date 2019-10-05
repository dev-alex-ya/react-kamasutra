import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="I shot a new video" like="20" />
                <Post message="Hello, world!" like="15" />
                <Post message="It's my first post!" like="1" />
            </div>
        </div>
    );
};

export default MyPosts;