import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'></img>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg'></img>
                <div className={classes.description}></div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;