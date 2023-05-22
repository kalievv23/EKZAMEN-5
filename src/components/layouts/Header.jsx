import React from "react";
import logos from "../assets/icons/logos.png";
import basketIcon from "../assets/icons/basketIcon.png";
import searchIcon from "../assets/icons/searchIcon.png";
import styled from "styled-components";

function Header() {
  return (
    <Headerr>
      <Logo>
        <img src={logos} alt="" />
      </Logo>
      <ul>
        <li> home</li>
        <li> man</li>
        <li> woman</li>
        <li> kids</li>
        <li> sale</li>
      </ul>
      <Icons>
        <SearchIcon src={searchIcon} alt="" />
        <BasketIcon src={basketIcon} alt="" />
      </Icons>
    </Headerr>
  );
}

export default Header;

const Logo = styled.div`
  width: 250px;
`;

const Headerr = styled.header`
  position: fixed;
  background-image: linear-gradient(
    to bottom,
    #cd0000,
    #a4000f,
    #7a0012,
    #51000e,
    #2c0000
  );
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  & ul {
    color: white;
    display: flex;
    width: 600px;
    justify-content: space-between;
  }
  & li {
    list-style-type: none;
    font-weight: 900;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0.465em;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: 0.1s;
  }
  & li:hover {
    color: #b3b3b3;
  }
`;

const BasketIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;
