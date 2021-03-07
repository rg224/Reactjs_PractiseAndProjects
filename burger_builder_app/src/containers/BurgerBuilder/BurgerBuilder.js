import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      meat: 2,
      cheese: 2
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Building Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;