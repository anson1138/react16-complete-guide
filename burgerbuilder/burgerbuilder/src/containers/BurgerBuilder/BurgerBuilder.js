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

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {...this.state.ingredients};
    //     updatedIngredients[type] = updatedCount;
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = INGREDIENT_PRICES[type] + oldPrice;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     });
    // }

    addIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients}
            updatedIngredients[type] += 1
            return (
                {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
                }
            )
        });
}

    //removeIngredientHandler = (type) => {
    //    const oldCount = this.state.ingredients[type];
    //    if (oldCount <= 0) {
    //        return;
    //    }
    //    const updatedCount = oldCount - 1;
    //    const updatedIngredients = {...this.state.ingredients};
    //    updatedIngredients[type] = updatedCount;
    //    const oldPrice = this.state.totalPrice;
    //    const newPrice = INGREDIENT_PRICES[type] - oldPrice;
    //    this.setState({
    //        totalPrice: newPrice,
    //        ingredients:updatedIngredients
    //    });
    //}

    removeIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients};
            if (updatedIngredients[type] <= 0) {
                return;
            } else {
                updatedIngredients[type] -= 1;
            }

            return (
                {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
                }
            )

        })
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log('this is disabledInfo:',disabledInfo)
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </Aux>
        );

    }

}

export default BurgerBuilder;
