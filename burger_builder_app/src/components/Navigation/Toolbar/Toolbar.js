import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Side Drawer Button</div>
    
    <Logo />
    
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;