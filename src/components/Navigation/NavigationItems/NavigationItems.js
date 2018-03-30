import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/menu1' active>Burger Builder</NavigationItem> 
        <NavigationItem link='/menu2'>Checkout</NavigationItem>
    </ul>
);

// active is the same as active = true

export default navigationItems;