import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: lightgray;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const ItemButton = styled.button`
  width: 100px;
  padding: 15px 0;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bolder;
  border: 1px solid;
  border-radius: 15px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: lightpink;
    transition: 0.3s;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <ButtonWrap>
        <Link to="/info">
          <ItemButton>info</ItemButton>
        </Link>
        <Link to="/about">
          <ItemButton>about</ItemButton>
        </Link>
        <Link to="/contact">
          <ItemButton>contact</ItemButton>
        </Link>
        <Link to="/user">
          <ItemButton>user</ItemButton>
        </Link>
      </ButtonWrap>
    </HeaderContainer>
  );
};

export default Header;
