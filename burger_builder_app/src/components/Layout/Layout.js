import React from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <Aux>
      <ToolBar />
      <main className={classes.Layout}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;