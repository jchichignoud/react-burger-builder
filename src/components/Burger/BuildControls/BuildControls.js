import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props) => {
    const ingredientsControls = Object.keys(props.ingredients)
        .map((ing) => {
            let isDisabled = false;
            let isMax = false;
            if (props.ingredients[ing].count === 0) {
                isDisabled = true;
            }
            if (props.ingredients[ing].count >= props.ingredients[ing].max) {
                isMax = true;
            }
            return (
                <BuildControl
                    key={ing}
                    ingredient={ing}
                    added={props.ingredientAdded}
                    removed={props.ingredientRemoved}
                    isDisabled = {isDisabled}
                    isMax = {isMax}
                    />
            )
        });

    return (
        <div className={classes.BuildControls}>
            <p>Total: ${props.totalPrice.toFixed(2)}</p>
            {ingredientsControls}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.showOrder}>
                    ORDER NOW
                </button>
        </div>
    )
};

export default buildControls

