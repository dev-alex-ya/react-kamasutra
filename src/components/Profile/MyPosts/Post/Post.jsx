import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.photo} src='https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg'></img>
            <div className={classes.message}>
                <div className={classes.text}>{props.message}</div>
                <hr/>
                <div className={classes.like}>
                    <span>Like - </span>
                    <span>{props.like}</span>
                </div>
            </div>

        </div>
    );
};

export default Post;