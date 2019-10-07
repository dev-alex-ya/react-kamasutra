import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", like: "20"},
    {message: "I shot a new video", like: "20"},
    {message: "Hello, world!", like: "15"},
    {message: "It's my first post!", like: "2"}
];

const MyPosts = () => {
    return (
        <div>
            <div className={classes.newPost}>
                <textarea rows="2" aria-readonly={true} aria-rowcount={400}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={posts[0].message} like={posts[0].like} />
                <Post message={posts[1].message} like={posts[1].like} />
                <Post message={posts[2].message} like={posts[2].like} />
            </div>
        </div>
    );
};

export default MyPosts;