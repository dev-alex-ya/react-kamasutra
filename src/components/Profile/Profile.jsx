import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.banner} src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'></img>
            </div>
            <div className={classes.info}>
                <img src='https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg'></img>
                <div className={classes.description}>
                    <ul>
                        <li>Alex Ya</li>
                        <li>from Ukraine</li>
                        <li>I love React</li>
                    </ul>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;