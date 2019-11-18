import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    // debugger;
    let posts = props.posts.map(post => <Post message={post.message} like={post.like} />);
    let newPostElement = React.createRef();//создаем ссылку
    console.log(props.updateNewPostText);

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    let onPostChange = () => {
        // debugger;

        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        newPostElement.current.value = props.newPostText;
    };

    return (
        <div>
            <div className={classes.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} rows="2" aria-rowcount={400} />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;