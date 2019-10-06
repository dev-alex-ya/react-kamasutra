import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";




const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Стив Роджерс</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Брюс Брэннер</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Наташа Романофф</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Тор</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Доктор Стивен Стрэндж</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/7'>Грут</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hey we are going to the cinema.</div>
                <div className={classes.message}>are you coming with us</div>
            </div>
        </div>
    );
};

export default Dialogs;