import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // debugger;
    let posts = props.posts.map(post => <Post message={post.message} like={post.like} />);
    let newPostElement = React.createRef();//создаем ссылку
    console.log(props.updateNewPostText);

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        // debugger;

        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST', newText: text});
        newPostElement.current.value = props.newPostText;
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