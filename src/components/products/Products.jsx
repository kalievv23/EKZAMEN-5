import React, { useState } from "react";
import ProductsRender from "./ProductsRender";
import styled from "styled-components";

function Products() {
  const products = [
    {
      id: 1,
      title: "Nike Air Max 95",
      price: 199,
      amount: 1,
      description:
        "Ab, saepe voluptate laudantium consectetur est sequi totam quasi.",
      imageUrl: "https://i.ebayimg.com/images/g/NcwAAOSw4TZj0pCw/s-l1600.jpg",
    },
    {
      id: 2,
      title: "Nike Air Max CJ4595",
      price: 229,
      amount: 1,
      description:
        "Minima vitae voluptates necessitatibus culpa facere, error inventore!",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/19c2a9d2-ec59-43ad-972e-e3f32c7ba9b9/air-max-95-premium-mens-shoes-4Nzc1w.png",
    },
    {
      id: 3,
      title: "Nike Air Jordan 1 Low",
      price: 330,
      amount: 1,
      description:
        "Soluta aspernatur iure placeat itaque magnam iusto assumenda!",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0e7fc8f3-76b7-4631-b147-4dad4b1ff241/air-jordan-1-mid-shoes-X5pM09.png",
    },
    {
      id: 4,
      title: "Jordan Stay Loyal 2",
      price: 999,
      amount: 1,
      description:
        "Quibusdam nisi soluta aspernatur itaque magnam iusto fugit.",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/379e9594-74f4-4001-a0b4-75fb43cf8d45/air-jordan-11-cmft-low-mens-shoes-Chz8HV.png",
    },
    {
      id: 5,
      title: "Nike Air Max Excee",
      price: 477,
      amount: 1,
      description: "Cure placeat itaque magnam iusto fugi vitae maxime animi!",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/67720f48-cbdb-4b74-94ad-f79d675cbbe3/air-max-plus-shoes-vGsr6j.png",
    },
    {
      id: 6,
      title: "Nike Air Max Correlate",
      price: 99,
      amount: 1,
      description: "Placeat itaque culpa facere, error consectetur inventore!",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/44482db4-ef88-411e-898a-0ffe7097f148/air-max-systm-shoes-HtKpnG.png",
    },
  ];

  return (
    <Wrapper>
      {products.map((item) => {
        return (
          <ProductsRender
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 72%;
  height: 950px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
