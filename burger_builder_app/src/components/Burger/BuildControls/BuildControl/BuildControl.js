import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button 
        className={classes.Add}
        onClick={props.added}>
          More
      </button>
      <button 
        className={classes.Less}
        onClick={props.deducted}
        disabled={props.disable_button} >
          Less
      </button>
    </div>
  );
}

export default buildControl;