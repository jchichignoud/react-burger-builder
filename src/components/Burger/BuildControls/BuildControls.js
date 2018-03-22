import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props) => {
    const ingredientsControls = Object.keys(props.ingredients)
        .map((ing) => {
            let isDisabled = false;
            if (props.ingredients[ing] === 0) {
                isDisabled = true;
            }
            return (
                <BuildControl
                    key={ing}
                    ingredient={ing}
                    added={props.ingredientAdded}
                    removed={props.ingredientRemoved}
                    isDisabled = {isDisabled}/>
            )
        });

    return (
        <div className={classes.BuildControls}>
            {ingredientsControls}
        </div>
    )
};

export default buildControls

