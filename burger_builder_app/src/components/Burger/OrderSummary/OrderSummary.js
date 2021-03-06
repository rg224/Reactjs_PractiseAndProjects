import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
              </li>
    });
  // <li>Salad: 1</li>

  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: ${props.price.toFixed(2)}</p>
      <p>Continue To Checkout?</p>
      <Button button_type="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button button_type="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;

/*
<p>Salad: x</p>
<p>Cheese: y</p>
<p>Meat: z</p>
<p>Bacon: w</p>

<p>Total Price : $x</p> 
*/