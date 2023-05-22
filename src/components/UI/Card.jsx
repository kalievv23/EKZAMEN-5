import React from "react";
import styled from "styled-components";

function Card(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;

const Wrapper = styled.div`
  border-radius: 15px;
  margin-top: 30px;
  width: 350px;
  height: 436px;
`;
