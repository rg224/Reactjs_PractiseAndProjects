import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [ ...Array(props.ingredients[igkey]) ].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />
      });
    })
    .reduce((arr,ele) => {
      return arr.concat(ele)
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add ingredients!</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;