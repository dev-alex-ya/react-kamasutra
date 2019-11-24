import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
            </div>

            <section className={classes.messages}>
                <div className={classes.messagesItems}>
                    {props.messagesPage.messages.map(msg => <Message message={msg.message} messageOwner={msg.messageOwner} /> )}
                </div>
                <NewMessage newMsgText={props.messagesPage.newMsgText} dispatch={props.dispatch}/>
            </section>
        </div>
    );
};

export default Dialogs;