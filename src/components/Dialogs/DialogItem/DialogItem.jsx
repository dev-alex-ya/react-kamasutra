import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink activeClassName={classes.active} className={classes.dialogItem} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;