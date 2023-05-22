import React from "react";
import mainImage from "../assets/images/mainImage.png";
import styled from "styled-components";
import Products from "../products/Products";
import OrdersBusket from "../busket/OrdersBusket";

function Main() {
  return (
    <div>
      <MainImage src={mainImage} alt="" />
      <Wrapper>
        <Products />
        <OrdersBusket/>
      </Wrapper>
    </div>
  );
}

export default Main;

const MainImage = styled.img`
  width: 100%;
  z-index: -1;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  `
