import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import ProductsForma from "./ProductsForma";

function ProductsRender(props) {

  return (
    <Card>
      <Wrapper>
        <h2>{props.title}</h2>
        <span>{props.description}</span>
        <ShoesImage src={props.imageUrl} alt="" />
        <FormaWithPrice>
          <b>$ {props.price}</b>
          <ProductsForma props={props} />
        </FormaWithPrice>
      </Wrapper>
    </Card>
  );
}

export default ProductsRender;

const Wrapper = styled.div`
  height: 436px;
  & h2,
  span {
    position: relative;
    top: 70px;
    line-height: 0;
    z-index: 1; 
  }
  & span {
    color: #656565;
  }
  & b {
    font-size: 25px;
  }
  position: relative;
  bottom: 41px;
`;

const ShoesImage = styled.img`
  border-radius: 15px;
  width: 350px;
  position: relative;
  bottom: 43px;
`;

const FormaWithPrice = styled.div`
  position: relative;
  bottom: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
