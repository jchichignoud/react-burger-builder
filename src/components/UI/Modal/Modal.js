import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    [
        <Backdrop
            key='1'
            show={props.show}
            clicked={props.hideOrder}
        />,
        <div
            key='2'
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>,
    ]
    
);

export default modal;