import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div>Current Price: <strong>{props.price.toFixed(2)}</strong></div>

      {controls.map(ctrl => (
        <BuildControl 
          label={ctrl.label} 
          key={ctrl.label}
          added={() => props.addIngredient(ctrl.type)}
          deducted={() => props.removeIngredient(ctrl.type)}
          disable_button={props.disabled[ctrl.type]} />
      ))}

      <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.showModal}>
          ORDER NOW
      </button>
    </div>
  );
}

export default buildControls;