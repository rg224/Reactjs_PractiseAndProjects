import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'; // imported package
import AmazonLogo from '../../assets/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const header = () => {
  return (
    <div>
      <Header>
        
        <Link to="/">
          <HeaderLogo>
            <img src={AmazonLogo} alt="Amazon Logo" />
          </HeaderLogo>
        </Link>

        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select your address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>

        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIcon>
            <SearchIcon />
          </HeaderSearchIcon>
        </HeaderSearch>

        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, Ritika</OptionLineOne>
            <OptionLineTwo>Accounts & Lists</OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingCartIcon />
              <CartCount>4</CartCount>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>

      </Header>
    </div>
  );
}

export default header;

const Header = styled.div `
  width: 100%;
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-item: center;
  color: white;
  justify-content: space-between;
`

const HeaderLogo = styled.div `
  img {
    width: 100px;
    margin-left: 11px;
    padding-top: 15px;
  }
`

const HeaderOptionAddress = styled.div `
  padding-left: 9px;
  display: flex;  
  align-items: center;
`

const OptionLineOne = styled.div ``

const OptionLineTwo = styled.div `
  font-weight: 700;
`

const HeaderSearch = styled.div `
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  margin-left: 4px;
  margin-top: 7px;
  overflow: hidden;
  backgroung-color: white;

  :focus-within {
    box-shadow: 0 0 0 3px #F90;
  }
`

const HeaderSearchInput = styled.input `
  flex-grow: 1;
  border:0;
  :focus {
    outline: none;
  }
`

const HeaderSearchIcon = styled.div `
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderNavItems = styled.div ` 
  display: flex;
  align-items: center;
`

const HeaderOption = styled.div `
  //TRouBLe
  padding: 10px 9px 10px 9px;
`

const HeaderOptionCart = styled.div `
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`

const CartCount = styled.div `
  padding-left: 4px;
`
