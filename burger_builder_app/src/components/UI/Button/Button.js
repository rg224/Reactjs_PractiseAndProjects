import React from 'react';

import classes from './Button.css';

const button = (props) => {
  return (
    <button 
      onClick={props.clicked} 
      className={[classes.Button, classes[props.button_type]].join(' ')}>
        {props.children}
    </button>
  );
}

export default button;