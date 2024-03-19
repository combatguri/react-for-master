import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  padding: 1em;
`;

const LogoWrapper = styled.div`
  img {
    height: 30px;
  }
`;

const MenuWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;
    li {
      font-weight: bold;
      padding: 0 0.5em;
    }
  }
`;

const BtnSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

function Header() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={logo} className="App-logo" alt="logo" />
      </LogoWrapper>
      <MenuWrapper>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/coin">COIN</Link>
          </li>
          <li>
            <BtnSpan onClick={goToAbout}>ABOUT</BtnSpan>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </MenuWrapper>
    </HeaderContainer>
  );
}

export default Header;
