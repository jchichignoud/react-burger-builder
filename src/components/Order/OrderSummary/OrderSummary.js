import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients)
        .map( ing => <li key ={ing}><span style={{textTransform: 'capitalise', fontWeight:'700'}}>{ing}:</span> {props.ingredients[ing].count}</li>);

    return (
        <Auxiliary>
        <h3>Your Order</h3>
        <p>Burger with:</p>
        <ul>
            {ingredientsList}
        </ul>
        <p>That'll be <strong>${props.totalPrice}.</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType='Danger' clicked={props.hideOrder}>CANCEL</Button>
        <Button btnType='Success'clicked={props.purchase}>CONTINUE</Button>
    </Auxiliary>
    ) 
}

export default orderSummary