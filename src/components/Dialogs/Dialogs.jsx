import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

let messages = [
    {message: "Hi"},
    {message: "Hey we are going to the cinema."},
    {message: "are you coming with us"}
];

let dialogs = [
    {id: '1', name: "Стивен Роджерс"},
    {id: '2', name: "Энтони Старк"},
    {id: '3', name: "Брюс Брэннер"},
    {id: '4', name: "Наташа Романофф"},
    {id: '5', name: "Тор"},
    {id: '6', name: "Доктор Стивен Стрэндж"},
    {id: '7', name: "Грут"}
];

let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messagesElements = messages.map( msg => <Message message={msg.message} /> );

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;