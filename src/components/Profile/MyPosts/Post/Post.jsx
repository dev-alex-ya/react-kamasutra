import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg'></img>
            {props.message}
            <div>
                <span>Like - </span>
                <span>{props.like}</span>
            </div>
        </div>
    );
};

export default Post;