import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
};


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
                <DialogItem name={dialogs[6].name} id={dialogs[6].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;