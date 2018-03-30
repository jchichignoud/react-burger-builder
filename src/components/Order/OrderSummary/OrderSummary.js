import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients)
        .map( ing => <li key ={ing}><span style={{textTransform: 'capitalise', fontWeight:'700'}}>{ing}:</span> {props.ingredients[ing].count}</li>);

    return (
        [
            <h3 key='1'>Your Order</h3>,
            <p key='2'>Burger with:</p>,
            <ul key='3'>
                {ingredientsList}
            </ul>,
            <p key='4'>That'll be <strong>${props.totalPrice}.</strong></p>,
            <p key='5'>Continue to checkout?</p>,
            <Button key='6' btnType='Danger' clicked={props.hideOrder}>CANCEL</Button>,
            <Button key='7' btnType='Success'clicked={props.purchase}>CONTINUE</Button>
        ]
    ) 
}

export default orderSummary