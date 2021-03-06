import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
        "salad": 0.7,
        "bacon": 0.5,
        "meat": 1,
        "cheese": 1
}

class BurgerBuilder extends Component {

    state = {
        // ingredients: {
            // "salad": 0,
            // "bacon": 0,
            // "meat": 0,
            // "cheese": 0
        // },
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://udemy-react-3cb2b.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })

    }

    updatePurchaseState (ingredients) {
        // const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;

            }, 0);
        this.setState({purchasable: sum > 0})

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('American Citizenbutt!!!');
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bran Josh Cam',
                address: {
                    street: '21 jump street',
                    zipCode: '93223',
                    country: 'USA'
                },
                email: 'shakeshack@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            });
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
            this.updatePurchaseState(updatedIngredients);
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

            this.updatePurchaseState(updatedIngredients);
            return (
                {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
                }
            )
        });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = (this.state.error ? <p>Ingredient's can't be loaded!</p> : <Spinner />);


        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                        <BuildControls
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled={disabledInfo}
                            purchasable={this.state.purchasable}
                            ordered={this.purchaseHandler}
                            price={this.state.totalPrice}
                        />
                </Aux>
            );

            orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />;

        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );

    }

}

export default withErrorHandler(BurgerBuilder, axios);
