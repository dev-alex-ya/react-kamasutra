import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./friend/Friend";

const Nav = (props) => {
debugger;
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
                </div>
            </nav>
            <section>
                <h2>Friends</h2>
                <div className={classes.friends}>
                    {props.friends.map((friend) => <Friend name={friend.name} photo={friend.photo} />)}
                </div>
            </section>
        </div>
    );
};

export default Nav;