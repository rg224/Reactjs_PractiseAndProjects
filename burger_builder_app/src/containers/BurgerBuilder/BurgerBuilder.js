import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    disabled: true,
  }

  addIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    this.setState({ingredients: updateIngredients});
  }

  removeIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;

    let updateIngredients = {...this.state.ingredients};
    updateIngredients[type] = updatedCount;

    this.setState({ingredients: updateIngredients, disabled: false});
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
          disabled={disabledInfo} />
      </Aux>
    );
  }
}

export default BurgerBuilder;