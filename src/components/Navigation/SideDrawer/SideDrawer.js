import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer];
    attachedClasses.push(props.open ? classes.Open : classes.Close)

    return (
        [<Backdrop key='1' show={props.open} clicked={props.closed}/>,
        <div key='2'className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>]
    )
};

export default sideDrawer;