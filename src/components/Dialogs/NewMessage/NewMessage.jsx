import React from 'react';
import classes from './NewMessage.module.css';

const NewMessage = (props) => {
    return (
        <div className={classes.newMessage}>
            <textarea className={classes.text}></textarea>
            <button className={classes.btnSend}>Send</button>
        </div>
    );
};

export default NewMessage;