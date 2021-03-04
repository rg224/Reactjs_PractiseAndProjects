import React from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.css';

const layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer and BackDrop</div>
      <main className={classes.Layout}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;