import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
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

export default burgerIngredient;