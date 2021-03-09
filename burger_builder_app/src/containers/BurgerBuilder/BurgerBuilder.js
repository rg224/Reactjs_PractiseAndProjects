import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
  }

  addIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + price[type];

    this.setState({ingredients: updateIngredients, totalPrice: updatedPrice});
  }

  removeIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - price[type];

    this.setState({ingredients: updateIngredients, totalPrice: updatedPrice});
  }

  render () {

    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredient={(event) => this.addIngredientHandler(event)}
          removeIngredient={(event) => this.removeIngredientHandler(event)}
          disabled={disabledInfo}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;