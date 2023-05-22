import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../store/ContextProvider";

function ProductsForma({ props }) {
  const [count, setCount] = useState(1);
  const context = useContext(Context);
  const counterPlus = () => {
    setCount((prev) => prev + 1);
  }
  const counterMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev))
  }
  const addItemToCartHandler = () => {
    const newItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: count,
      imageUrl: props.imageUrl,
    };
    context.saveNewItem(newItem);
  };
  return (
    <Wrapper>
      <div>
        <Button onClick={counterPlus} variant="contained">
          +
        </Button>
        <b>{count}</b>
        <Button
          onClick={counterMinus}
          variant="contained"
        >
          -
        </Button>
      </div>
      <Button variant="contained" onClick={addItemToCartHandler}>
        ADD TO CART
      </Button>
    </Wrapper>
  );
}

export default ProductsForma;

const Wrapper = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 160px;
  }
  & b {
    font-weight: 400;
    font-size: 24px;
  }
`;
