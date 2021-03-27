import React from 'react';
import styled from 'styled-components';

const home = () => {
  return (
    <HomeContainer>
      <Banner></Banner>
    </HomeContainer>
  );
}

export default home;

const HomeContainer = styled.div ``

const Banner = styled.div `
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
` 
