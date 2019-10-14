import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post message={post.message} like={post.like} />);
    let newPostElement = React.createRef();//создаем ссылку
    let addPost = () => {

        let text = newPostElement.current.value;
        alert(text);
    };
    return (
        <div>
            <div className={classes.newPost}>
                <textarea ref={newPostElement} rows="2" aria-readonly={true} aria-rowcount={400}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts}
                <div className={classes.newMessage}>
                    <textarea ref={newPostElement} rows="2" aria-readonly={true} aria-rowcount={400}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;