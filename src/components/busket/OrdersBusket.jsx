import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/ContextProvider";
import deleteIcon from "../assets/icons/deleteIcon.png";
import TotalPrice from "./TotalPrice";

function OrdersBusket() {
  const context = useContext(Context);
  const deleteItemHandler = (id) => {
    context.setItems((prevItems) =>
      prevItems.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };
  return (
    <Wrapper>
      <Busket>
        <TotalPrice/>
        <hr />
        {context.items.map((item) => (
          <CardItem>
            <ItemImage src={item.imageUrl} alt="" />
            <div>
              <h4>{item.title}</h4>
              <h3>{item.amount}</h3>
              <h4>${item.price}</h4>
            </div>
            <DeleteIcon
              onClick={() => deleteItemHandler(item.id)}
              src={deleteIcon}
              alt="Delete"
            />
          </CardItem>
        ))}
      </Busket>
    </Wrapper>
  );
}

export default OrdersBusket;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Busket = styled.div`
  padding: 15px;
  width: 350px;
  margin-top: 48px;
  border-radius: 15px;
  background-color: #ededed;
`;
const CardItem = styled.div`
  margin-top: 15px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  & div {
    width: 180px;
  }

  & h4 {
    line-height: 0;
  }
`;
const ItemImage = styled.img`
  width: 130px;
  border-radius: 10px;
`;
const DeleteIcon = styled.img`
  width: 25px;
  height: 25px;
`;
