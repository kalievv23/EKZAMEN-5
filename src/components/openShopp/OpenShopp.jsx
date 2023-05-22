import React, { useContext } from "react";
import styled from "styled-components";
import "./OpenShopp.css";
import { Context } from "../store/ContextProvider";
import Spinner from "./Spinner";

function OpenShopp() {
  const context = useContext(Context)
  const openShoppHandler = () => {
    context.setIsLoadingSpinner(true)
    setTimeout(() => {
      context.setIsLoadingSpinner(false)
    }, 6000);
    setTimeout(() => {
      context.setIsLoadin(true)
    }, 6500);
  }
  return (
    <Wrapper className="background">
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      <div>
        <span className="openShop" onClick={openShoppHandler}>Open Shopp</span>
        {context.isLoadingSpinner && <Spinner/>}  
      </div>
    </Wrapper>
  );
}

export default OpenShopp;

const Wrapper = styled.ul`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items : center;
    height: 130px;
  }
  & span {
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    letter-spacing: 5px;
    color: white;
    padding: 10px;
    border-radius: 10px;
    transition: 0.1s;
    z-index: 1000;
  }
  & span:hover {
    transform: scale(1.01);
    box-shadow: 0 0 15px 1px #b4b4b4;
  }
  & span:active {
    transform: scale(0.9);
  }
`;
