import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
        "salad": 0.7,
        "bacon": 0.5,
        "meat": 1,
        "cheese": 1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            "salad": 1,
            "bacon": 1,
            "meat": 1,
            "cheese": 1
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENT_PRICES[type] + oldPrice;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Aux>
        );

    }

}

export default BurgerBuilder;