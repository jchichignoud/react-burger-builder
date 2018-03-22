import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css'

const burger = (props) => {
    // turn the ingredients object into an array of JSX
    let ingredientsArray = Object.keys(props.ingredients) // creates an array from object, where each value in the array is a key of the object
        .map(ingKey => { // map the array, with each item in the array returning....
            return [...Array(props.ingredients[ingKey])].map((_, i) => { // ... a nested array the length of the value of each key (if there's 2 salads, the nested array with have a length of two) -- underscore as first arg means we don't care about it, we justwant the index (2nd arg)
                return <BurgerIngredient key={ingKey + i} type={ingKey}/> // each item in the nested array is a JSX element, with a unique key based on the ingredient name and a number, passing type (name of ingredient) as props
            });
        })
        .reduce((arr, el) => { // reduce 'adds' together all the values in the array, to 'flatten' it, turning [[a, b, c], [d, e, f]] into [a, b, c, d, e, f]
            return arr.concat(el) // concatenates the accumulator from the reduce method with the current element
        }, []);
        
        // the reduce method above is optional, the ingredients would still render with nested arrays, but it is there to check if array is empty for the following:

        if (ingredientsArray.length === 0) {
            ingredientsArray = <p>Add some ingredients</p>
        }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientsArray}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;