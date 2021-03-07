import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;

    switch (props.types) {
      case ('bread-top'):
        ingredient = <div className={classes.BreadTop}></div>;
        break;
      case ('bread-bottom'):
        ingredient = <div lassName={classes.BreadBottom}></div>;
        break;
      case ('salad'):
        ingredient = <div lassName={classes.Salad}></div>;
        break;
      case ('meat'):
        ingredient = <div lassName={classes.Meat}></div>;
        break;
      case ('bacon'):
        ingredient = <div lassName={classes.Bacon}></div>;
        break;
      case ('cheese'):
        ingredient = <div lassName={classes.Cheese}></div>;
        break;
      default :
        ingredient=null;
        break;
  }
  return ingredient;
  }
} 

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;