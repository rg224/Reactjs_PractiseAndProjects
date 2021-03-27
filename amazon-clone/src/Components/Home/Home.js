import React from 'react';
import styled from 'styled-components';

const home = () => {
  return (
    <HomeContainer>
      <Banner></Banner>

      <Content>
        CONTENT PART
      </Content>
    </HomeContainer>
  );
}

export default home;

// adjust max-width, min-height, margin-top according to your acreen size
const HomeContainer = styled.div `
  max-width: 1200px;
  margin: 0 auto;
`

const Banner = styled.div `
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 450px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
` 

const Content = styled.div `
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -260px;
` 
