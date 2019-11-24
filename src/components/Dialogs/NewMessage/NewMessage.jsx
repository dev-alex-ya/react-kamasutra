import React from 'react';
import classes from './NewMessage.module.css';
import {updateNewMsgTextActionCreator} from "../../../redux/state";

const NewMessage = (props) => {
    let newMsgElement = React.createRef();
    debugger;
    const onMsgChange = () => {
        let text = newMsgElement.current.value;
        let action = updateNewMsgTextActionCreator(text);
        props.dispatch(action);
        newMsgElement.current.value = props.newMsgText;
    };

    return (
        <div className={classes.newMessage}>
            <textarea className={classes.text} onChange={onMsgChange} ref={newMsgElement} value={props.newMsgText}></textarea>
            <button className={classes.btnSend}>Send</button>
        </div>
    );
};

export default NewMessage;