import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

                <DialogItem name="Стив Роджерс" id='1' />
                <DialogItem name="Энтони Старк" id='2' />
                <DialogItem name="Брюс Брэннер" id='3' />
                <DialogItem name="Наташа Романофф" id='4' />
                <DialogItem name="Тор" id='5' />
                <DialogItem name="Доктор Стивен Стрэндж" id='6' />
                <DialogItem name="Грут" id='7' />

            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hey we are going to the cinema."/>
                <Message message="are you coming with us"/>
            </div>
        </div>
    );
};

export default Dialogs;