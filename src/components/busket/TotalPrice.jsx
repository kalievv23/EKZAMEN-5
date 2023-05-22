import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/ContextProvider";

function TotalPrice() {
  const context = useContext(Context);
  const total = context.items.reduce((res, item) => {
    return res + item.amount * item.price;
  }, 0);
  return (
    <Wrapper>
      {total === 0 ? <NoOrders>No orders!</NoOrders> : <NoOrders>{`${"TOTAL: $"}${total}`}</NoOrders>}
    </Wrapper>
  );
}

export default TotalPrice;

const Wrapper = styled.div`
  /* border: 1px solid; */
`;
const NoOrders = styled.span`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;
