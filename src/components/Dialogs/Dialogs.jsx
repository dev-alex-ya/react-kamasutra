import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
            </div>

            <section className={classes.messages}>
                <div className={classes.messagesItems}>
                    {props.messages.map(msg => <Message message={`${msg.message} ${msg.messageOwner}`} /> )}
                </div>
                <NewMessage/>
            </section>
        </div>
    );
};

export default Dialogs;