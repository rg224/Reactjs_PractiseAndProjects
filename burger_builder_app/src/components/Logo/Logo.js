import React from 'react';

import classes from './Logo.css'
import BurgerLogo from '../../assets/Images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo} >
    <img src={BurgerLogo} alt="HeyBurger" />
  </div>
);

export default logo;