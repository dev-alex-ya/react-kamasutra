import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';



// let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

// let messagesElements = messages.map( msg => <Message message={msg.message} /> );

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
            </div>

            <div className={classes.messages}>
                {props.messages.map( msg => <Message message={msg.message} /> )}
            </div>
        </div>
    );
};

export default Dialogs;