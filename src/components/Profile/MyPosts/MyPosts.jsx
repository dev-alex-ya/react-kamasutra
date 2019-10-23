import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // debugger;
    let posts = props.posts.map(post => <Post message={post.message} like={post.like} />);
    let newPostElement = React.createRef();//создаем ссылку
    console.log(props.updateNewPostText);
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    };
    let onPostChange = () => {
        // debugger;

        let currentText = newPostElement.current.value;
        props.updateNewPostText(currentText);
        newPostElement.current.value = props.newPost;
    };

    return (
        <div>
            <div className={classes.newPost}>
                <textarea ref={newPostElement} value={props.newPostText} rows="2" aria-rowcount={400} onChange={onPostChange}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;