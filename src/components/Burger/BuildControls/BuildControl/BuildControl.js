import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredient}</div>
            <button
            className={classes.Less}
            onClick={() => props.removed(props.ingredient)}
            disabled={props.isDisabled}>
            Less</button>
            <button
                className={classes.More}
                onClick={() => props.added(props.ingredient)}
            >More</button>
        </div>
    )
};

export default buildControl;