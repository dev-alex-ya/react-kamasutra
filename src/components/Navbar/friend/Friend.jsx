import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={classes.friend}>
            <img className={classes.photo} src={props.photo}></img>
            <div>{props.name}</div>
        </div>
    );
};

export default Friend;