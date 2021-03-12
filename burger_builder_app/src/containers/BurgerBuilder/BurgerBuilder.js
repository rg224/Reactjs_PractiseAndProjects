import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const price = {
  salad: 0.3,
  bacon: 0.6,
  cheese: 0.7,
  meat: 0.5
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: null,
    purchasing: false
  }

  updatePurchaseHandler (updateIngredients) {
    const ingredients = updateIngredients;

    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((add,ele) => {
        return add+ele;
      },0);
    
    this.setState({ purchasable: sum > 0 })

    // console.log(sum);
  }

  addIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + price[type];

    this.setState({ingredients: updateIngredients, totalPrice: updatedPrice});
    this.updatePurchaseHandler(updateIngredients);
  }

  removeIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - price[type];

    this.setState({ingredients: updateIngredients, totalPrice: updatedPrice});
    this.updatePurchaseHandler(updateIngredients);
  }

  // whenever Order Now button is clicked, this method should be triggred
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  render () {
    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary  ingredients={this.state.ingredients} price={this.state.totalPrice} />
        </Modal>

        <Burger ingredients={this.state.ingredients} />

        <BuildControls 
          addIngredient={(event) => this.addIngredientHandler(event)}
          removeIngredient={(event) => this.removeIngredientHandler(event)}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          showModal={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;