import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", like: "20"},
    {message: "I shot a new video", like: "20"},
    {message: "Hello, world!", like: "15"},
    {message: "It's my first post!", like: "2"}
];

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} />
        </div>
    );
}

export default Profile;