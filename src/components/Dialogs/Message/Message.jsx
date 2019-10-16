import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
    let ownerClass  = props.messageOwner === 'me' ? classes.me : classes.notMe;
    return <div className={classes.message + ' ' + ownerClass }>{props.message}</div>
};

export default Message;