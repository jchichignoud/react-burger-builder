import React, {
    Component
} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: {
                count: 0,
                price: 0.5,
                max: 2
            },
            bacon: {
                count: 0,
                price: 1.20,
                max: 4
            },
            cheese: {
                count: 0,
                price: 1,
                max: 5
            },
            meat: {
                count: 0,
                price: 1.70,
                max: 2
            },
        },
        basePrice: 4,
        isPurchasable: false,
        showOrder: false,
    }

    updatePurchaseState (ingredients) {
        const sum = Object.values(ingredients)
            .map((ing) => ing.count)
            .reduce((total, num) => total + num);
        this.setState({isPurchasable: sum > 0})
    }

    showOrderHandler = () => {
        this.setState({showOrder: true});
    }

    hideOrderHandler = () => {
        this.setState({showOrder: false});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type].count;
        if (oldCount < this.state.ingredients[type].max) {
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type].count = updatedCount;
            this.setState({ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        } 
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type].count;
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type].count = updatedCount;
            this.setState({ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseOrder = () => {
        console.log("purchase")
    }

    render() {
        const totalPriceComputed = (
            this.state.basePrice + (
                Object.values(this.state.ingredients)
                .map((ing) => ing.count * ing.price)
                .reduce((total, num) => total + num)
            )        
        );

        // let modal = null;

        // if (this.state.showOrder) {
        //     modal = (
        //         <Modal>
        //             <OrderSummary ingredients = {this.state.ingredients}/>
        //         </Modal>
        //     )
        // }

        return (
            <Auxiliary>
                <Modal show={this.state.showOrder} hideOrder={this.hideOrderHandler}>
                    <OrderSummary
                        ingredients = {this.state.ingredients}
                        hideOrder = {this.hideOrderHandler}
                        purchase = {this.purchaseOrder}
                        totalPrice = {totalPriceComputed}/>
                </Modal> 
                <Burger
                    ingredients = {this.state.ingredients}
                />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    ingredients = {this.state.ingredients}
                    totalPrice = {totalPriceComputed}
                    purchasable={this.state.isPurchasable}
                    showOrder={this.showOrderHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder