import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post message={post.message} like={post.like} />);

    return (
        <div>
            <div className={classes.newPost}>
                <textarea rows="2" aria-readonly={true} aria-rowcount={400}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;