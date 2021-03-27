import React from 'react';
import styled from 'styled-components';

const product = () => {
  return (
    <ProductContainer>
      <Title>
        IPad Pro
      </Title>

      <Price>
        $1449
      </Price>

      <Rating>
        ⭐⭐⭐⭐⭐
      </Rating>

      <ProductImage src="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg" />
      
      <AddToCartButton>Add to Cart</AddToCartButton>
    </ProductContainer>
  );
}

export default product;

const ProductContainer = styled.div `
  background-color: white;
  max-height: 300px;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid #b1b1b7;
  border-radius: 10px;
`
const Title = styled.span ``

const Price = styled.span `
  font-weight: 500;
  margin-top: 3px;
`

const Rating = styled.div ``

const ProductImage = styled.img `
  max-height: 200px;
  object-fit: contain;
`

const AddToCartButton = styled.button `
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #aB8734;
  border-radius: 2px;
  margin: auto;
`
